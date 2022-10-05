import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListShippingRoutingModule } from './list-shipping-routing.module';
import { ListShippingComponent } from './list-shipping.component';


@NgModule({
  declarations: [
    ListShippingComponent
  ],
  imports: [
    CommonModule,
    ListShippingRoutingModule
  ]
})
export class ListShippingModule { }
