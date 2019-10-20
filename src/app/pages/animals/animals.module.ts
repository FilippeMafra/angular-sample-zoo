import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesRoutingModule } from './animals-routing.module';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalTreeComponent } from './animal-tree/animal-tree.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EntriesRoutingModule,
    SharedModule,
  ],
  declarations: [
    AnimalFormComponent,
    AnimalListComponent,
    AnimalTreeComponent,
  ]
})
export class AnimalsModule { }
