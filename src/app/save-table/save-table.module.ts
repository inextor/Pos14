import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveTableRoutingModule } from './save-table-routing.module';
import { SaveTableComponent } from './save-table.component';


@NgModule({
  declarations: [
    SaveTableComponent
  ],
  imports: [
    CommonModule,
    SaveTableRoutingModule
  ]
})
export class SaveTableModule { }
