import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalTreeComponent } from './animal-tree/animal-tree.component';

const routes: Routes = [
  { path: '', component: AnimalListComponent },
  { path: 'new', component: AnimalFormComponent },
  { path: ':id/edit', component: AnimalFormComponent },
  { path: ':id/tree', component: AnimalTreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule { }
