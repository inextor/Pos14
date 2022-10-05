import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintExpensePaymentRoutingModule } from './print-expense-payment-routing.module';
import { PrintExpensePaymentComponent } from './print-expense-payment.component';


@NgModule({
  declarations: [
    PrintExpensePaymentComponent
  ],
  imports: [
    CommonModule,
    PrintExpensePaymentRoutingModule
  ]
})
export class PrintExpensePaymentModule { }
