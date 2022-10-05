import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddClientPaymentRoutingModule } from './add-client-payment-routing.module';
import { AddClientPaymentComponent } from './add-client-payment.component';


@NgModule({
  declarations: [
    AddClientPaymentComponent
  ],
  imports: [
    CommonModule,
    AddClientPaymentRoutingModule
  ]
})
export class AddClientPaymentModule { }
