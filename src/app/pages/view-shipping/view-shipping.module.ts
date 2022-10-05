import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewShippingRoutingModule } from './view-shipping-routing.module';
import { ViewShippingComponent } from './view-shipping.component';


@NgModule({
  declarations: [
    ViewShippingComponent
  ],
  imports: [
    CommonModule,
    ViewShippingRoutingModule
  ]
})
export class ViewShippingModule { }
