import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from '../in-memory-database';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    RouterModule
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    // shared modules
    HttpClientModule,

    // shared components
    NavbarComponent,
  ]
})
export class CoreModule { }
