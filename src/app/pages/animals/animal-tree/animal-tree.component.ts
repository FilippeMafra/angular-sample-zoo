import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import * as moment from 'moment';

import { Animal } from '../shared/animal.model';
import { AnimalService } from '../shared/animal.service';
@Component({
  selector: 'app-animal-tree',
  templateUrl: './animal-tree.component.html',
  styleUrls: ['./animal-tree.component.css']
})
export class AnimalTreeComponent implements OnInit {

  pageTitle = 'Árvore dos Animais';
  genders = Animal.gender;
  animals: Array<Animal>;
  currentAnimal: Animal;

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadAnimals();
    this.loadCurrentAnimal();
  }

  private loadAnimals() {
    this.animalService.getAll().subscribe(
      animals => this.animals = animals
    );
  }

  private loadCurrentAnimal() {
    this.route.paramMap.pipe(
      switchMap(params => this.animalService.getById(+params.get('id')))
    )
      .subscribe(
        (resource) => {
          this.currentAnimal = resource;
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      );
  }

  idade(data: string): string {
    moment.locale('pt-br');
    return (moment(data).fromNow()).replace('há', '');
  }

}
