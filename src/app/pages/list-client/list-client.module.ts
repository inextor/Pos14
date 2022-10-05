import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClientRoutingModule } from './list-client-routing.module';
import { ListClientComponent } from './list-client.component';


@NgModule({
  declarations: [
    ListClientComponent
  ],
  imports: [
    CommonModule,
    ListClientRoutingModule
  ]
})
export class ListClientModule { }
