import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveBillPaymentRoutingModule } from './save-bill-payment-routing.module';
import { SaveBillPaymentComponent } from './save-bill-payment.component';


@NgModule({
  declarations: [
    SaveBillPaymentComponent
  ],
  imports: [
    CommonModule,
    SaveBillPaymentRoutingModule
  ]
})
export class SaveBillPaymentModule { }
