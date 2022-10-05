import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOrderWaiterRoutingModule } from './list-order-waiter-routing.module';
import { ListOrderWaiterComponent } from './list-order-waiter.component';


@NgModule({
  declarations: [
    ListOrderWaiterComponent
  ],
  imports: [
    CommonModule,
    ListOrderWaiterRoutingModule
  ]
})
export class ListOrderWaiterModule { }
