import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListReturnsRoutingModule } from './list-returns-routing.module';
import { ListReturnsComponent } from './list-returns.component';


@NgModule({
  declarations: [
    ListReturnsComponent
  ],
  imports: [
    CommonModule,
    ListReturnsRoutingModule
  ]
})
export class ListReturnsModule { }
