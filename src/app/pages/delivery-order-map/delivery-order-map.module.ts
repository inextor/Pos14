import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryOrderMapRoutingModule } from './delivery-order-map-routing.module';
import { DeliveryOrderMapComponent } from './delivery-order-map.component';


@NgModule({
  declarations: [
    DeliveryOrderMapComponent
  ],
  imports: [
    CommonModule,
    DeliveryOrderMapRoutingModule
  ]
})
export class DeliveryOrderMapModule { }
