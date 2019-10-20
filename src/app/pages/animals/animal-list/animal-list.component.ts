import { Component } from '@angular/core';

import { faTree, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { AnimalService } from '../shared/animal.service';
import { Animal } from '../shared/animal.model';
import * as moment from 'moment';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent extends BaseResourceListComponent<Animal> {

  genders = Animal.gender;
  faTree = faTree;
  faTrash = faTrash;
  faPen = faPen;

  constructor(private animalService: AnimalService) {
    super(animalService);
  }

  dataFormatada(data: string): string {
    moment.locale('pt-br');
    return moment(data).format('L');
  }

  idade(data: string): string {
    return (moment(data).fromNow()).replace('há', '');
  }

}
