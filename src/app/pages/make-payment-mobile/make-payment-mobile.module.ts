import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakePaymentMobileRoutingModule } from './make-payment-mobile-routing.module';
import { MakePaymentMobileComponent } from './make-payment-mobile.component';


@NgModule({
  declarations: [
    MakePaymentMobileComponent
  ],
  imports: [
    CommonModule,
    MakePaymentMobileRoutingModule
  ]
})
export class MakePaymentMobileModule { }
