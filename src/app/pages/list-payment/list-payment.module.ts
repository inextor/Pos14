import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPaymentRoutingModule } from './list-payment-routing.module';
import { ListPaymentComponent } from './list-payment.component';


@NgModule({
  declarations: [
    ListPaymentComponent
  ],
  imports: [
    CommonModule,
    ListPaymentRoutingModule
  ]
})
export class ListPaymentModule { }
