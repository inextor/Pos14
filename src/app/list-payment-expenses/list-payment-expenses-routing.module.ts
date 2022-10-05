import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPaymentExpensesComponent } from './list-payment-expenses.component';

const routes: Routes = [{ path: '', component: ListPaymentExpensesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPaymentExpensesRoutingModule { }
