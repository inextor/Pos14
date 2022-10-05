import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryOrdersRoutingModule } from './delivery-orders-routing.module';
import { DeliveryOrdersComponent } from './delivery-orders.component';


@NgModule({
  declarations: [
    DeliveryOrdersComponent
  ],
  imports: [
    CommonModule,
    DeliveryOrdersRoutingModule
  ]
})
export class DeliveryOrdersModule { }
