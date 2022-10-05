import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiveShippingRoutingModule } from './receive-shipping-routing.module';
import { ReceiveShippingComponent } from './receive-shipping.component';


@NgModule({
  declarations: [
    ReceiveShippingComponent
  ],
  imports: [
    CommonModule,
    ReceiveShippingRoutingModule
  ]
})
export class ReceiveShippingModule { }
