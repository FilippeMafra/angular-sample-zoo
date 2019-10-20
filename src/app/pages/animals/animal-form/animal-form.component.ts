import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Specie } from '../../species/shared/specie.model';
import { Animal } from '../shared/animal.model';
import { AnimalService } from '../shared/animal.service';
import { SpecieService } from '../../species/shared/specie.service';
import * as moment from 'moment';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent extends BaseResourceFormComponent<Animal> implements OnInit {

  species: Array<Specie>;
  fathers: Array<Animal>;
  mothers: Array<Animal>;

  constructor(
    protected animalService: AnimalService,
    protected specieService: SpecieService,
    protected injector: Injector
  ) {
    super(injector, new Animal(), animalService, Animal.fromJson);
  }

  ngOnInit() {
    this.loadSpecies();
    this.loadMothers();
    this.loadFathers();
    super.ngOnInit();
  }

  idade(data: string): string {
    return moment(data).fromNow();
  }

  get genderOptions(): Array<any> {
    return Object.entries(Animal.gender).map(
      ([value, text]) => {
        return {
          text: text,
          value: value
        };
      }
    );
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      birthday: [null, [Validators.required]],
      gender: ['male', [Validators.required]],
      specieId: [null, [Validators.required]],
      fatherId: [null],
      motherId: [null]
    });
  }

  private loadSpecies() {
    this.specieService.getAll().subscribe(
      species => this.species = species
    );
  }

  private loadFathers() {
    this.animalService.getByGender('male').subscribe(
      animals => this.fathers = animals
    );
  }

  private loadMothers() {
    this.animalService.getByGender('female').subscribe(
      animals => this.mothers = animals
    );
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Animal';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.name || '';
    return 'Editando Animal: ' + resourceName;
  }

}
