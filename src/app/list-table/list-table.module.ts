import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTableRoutingModule } from './list-table-routing.module';
import { ListTableComponent } from './list-table.component';


@NgModule({
  declarations: [
    ListTableComponent
  ],
  imports: [
    CommonModule,
    ListTableRoutingModule
  ]
})
export class ListTableModule { }
