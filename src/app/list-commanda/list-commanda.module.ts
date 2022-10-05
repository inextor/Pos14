import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCommandaRoutingModule } from './list-commanda-routing.module';
import { ListCommandaComponent } from './list-commanda.component';


@NgModule({
  declarations: [
    ListCommandaComponent
  ],
  imports: [
    CommonModule,
    ListCommandaRoutingModule
  ]
})
export class ListCommandaModule { }
