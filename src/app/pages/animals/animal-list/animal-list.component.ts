import { Component } from '@angular/core';

import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { AnimalService } from '../shared/animal.service';
import { Animal } from '../shared/animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent extends BaseResourceListComponent<Animal> {

  genders = Animal.gender;

  constructor(private animalService: AnimalService) {
    super(animalService);
  }

}
