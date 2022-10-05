import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientViewOrderRoutingModule } from './client-view-order-routing.module';
import { ClientViewOrderComponent } from './client-view-order.component';


@NgModule({
  declarations: [
    ClientViewOrderComponent
  ],
  imports: [
    CommonModule,
    ClientViewOrderRoutingModule
  ]
})
export class ClientViewOrderModule { }
