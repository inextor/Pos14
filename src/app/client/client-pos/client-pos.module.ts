import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPosRoutingModule } from './client-pos-routing.module';
import { ClientPosComponent } from './client-pos.component';


@NgModule({
  declarations: [
    ClientPosComponent
  ],
  imports: [
    CommonModule,
    ClientPosRoutingModule
  ]
})
export class ClientPosModule { }
