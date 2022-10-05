import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOrderRoutingModule } from './list-order-routing.module';
import { ListOrderComponent } from './list-order.component';


@NgModule({
  declarations: [
    ListOrderComponent
  ],
  imports: [
    CommonModule,
    ListOrderRoutingModule
  ]
})
export class ListOrderModule { }
