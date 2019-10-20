import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap, catchError, map } from 'rxjs/operators';

import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { SpecieService } from '../../species/shared/specie.service';
import { Animal } from './animal.model';

import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class AnimalService extends BaseResourceService<Animal> {

  constructor(protected injector: Injector, private specieService: SpecieService) {
    super('api/animals', injector, Animal.fromJson);
  }


  create(animal: Animal): Observable<Animal> {
    return this.setRelationshipAndSendToServer(animal, super.create.bind(this));
  }

  update(animal: Animal): Observable<Animal> {
    return this.setRelationshipAndSendToServer(animal, super.update.bind(this));
  }

  getByMonthAndYear(month: number, year: number): Observable<Animal[]> {
    return this.getAll().pipe(
      map(animals => this.filterByMonthAndYear(animals, month, year))
    );
  }


  private setRelationshipAndSendToServer(animal: Animal, sendFn: any): Observable<Animal> {
    return this.specieService.getById(animal.specieId).pipe(
      flatMap(specie => {
        animal.specie = specie;
        return sendFn(animal);
      }),
      catchError(this.handleError)
    );
  }

  private filterByMonthAndYear(animals: Animal[], month: number, year: number) {
    return animals.filter(animal => {
      const animalDate = moment(animal.birthday, 'DD/MM/YYYY');
      const monthMatches = animalDate.month() + 1 === month;
      const yearMatches = animalDate.year() === year;

      if (monthMatches && yearMatches) { return animal; }
    });
  }

}
