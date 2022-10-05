import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPaymentExpensesRoutingModule } from './list-payment-expenses-routing.module';
import { ListPaymentExpensesComponent } from './list-payment-expenses.component';


@NgModule({
  declarations: [
    ListPaymentExpensesComponent
  ],
  imports: [
    CommonModule,
    ListPaymentExpensesRoutingModule
  ]
})
export class ListPaymentExpensesModule { }
