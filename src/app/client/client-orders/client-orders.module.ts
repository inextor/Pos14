import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientOrdersRoutingModule } from './client-orders-routing.module';
import { ClientOrdersComponent } from './client-orders.component';


@NgModule({
  declarations: [
    ClientOrdersComponent
  ],
  imports: [
    CommonModule,
    ClientOrdersRoutingModule
  ]
})
export class ClientOrdersModule { }
