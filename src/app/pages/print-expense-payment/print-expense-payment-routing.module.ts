import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintExpensePaymentComponent } from './print-expense-payment.component';

const routes: Routes = [{ path: '', component: PrintExpensePaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintExpensePaymentRoutingModule { }
