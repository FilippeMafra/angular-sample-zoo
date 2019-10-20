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
    return this.setRelationshipsAndSendToServer(animal, super.create.bind(this));
  }

  update(animal: Animal): Observable<Animal> {
    return this.setRelationshipsAndSendToServer(animal, super.update.bind(this));
  }

  getByGender(gender: string): Observable<Animal[]> {
    return this.getAll().pipe(
      map(animals => this.filterByGender(animals, gender))
    );
  }

  private filterByGender(animals: Animal[], gender: string): Animal[] {
    return animals.filter(animal => animal.gender === gender);
  }

  private setRelationshipsAndSendToServer(animal: Animal, sendFn: any): Observable<Animal> {
    // como esse problema de relacionamento é só do angular-in-memory-api não vou resolvê-lo da melhor forma.
    // O back-end real já resolve esse problema
    if (animal.motherId) {
      this.getById(animal.motherId).subscribe(
        mother => animal.mother = mother
      );
    }
    if (animal.fatherId) {
      this.getById(animal.fatherId).subscribe(
        father => animal.father = father
      );
    }
    return this.specieService.getById(animal.specieId).pipe(
      flatMap(specie => {
        animal.specie = specie;
        return sendFn(animal);
      }),
      catchError(this.handleError)
    );
  }

}
