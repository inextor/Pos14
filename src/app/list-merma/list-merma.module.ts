import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMermaRoutingModule } from './list-merma-routing.module';
import { ListMermaComponent } from './list-merma.component';


@NgModule({
  declarations: [
    ListMermaComponent
  ],
  imports: [
    CommonModule,
    ListMermaRoutingModule
  ]
})
export class ListMermaModule { }
