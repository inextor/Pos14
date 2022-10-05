import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCommandaTypeRoutingModule } from './list-commanda-type-routing.module';
import { ListCommandaTypeComponent } from './list-commanda-type.component';


@NgModule({
  declarations: [
    ListCommandaTypeComponent
  ],
  imports: [
    CommonModule,
    ListCommandaTypeRoutingModule
  ]
})
export class ListCommandaTypeModule { }
