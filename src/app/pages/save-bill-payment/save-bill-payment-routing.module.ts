import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveBillPaymentComponent } from './save-bill-payment.component';

const routes: Routes = [{ path: '', component: SaveBillPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveBillPaymentRoutingModule { }
