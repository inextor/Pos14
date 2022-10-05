import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintPaymentReceiptRoutingModule } from './print-payment-receipt-routing.module';
import { PrintPaymentReceiptComponent } from './print-payment-receipt.component';


@NgModule({
  declarations: [
    PrintPaymentReceiptComponent
  ],
  imports: [
    CommonModule,
    PrintPaymentReceiptRoutingModule
  ]
})
export class PrintPaymentReceiptModule { }
