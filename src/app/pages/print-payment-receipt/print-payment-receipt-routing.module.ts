import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintPaymentReceiptComponent } from './print-payment-receipt.component';

const routes: Routes = [{ path: '', component: PrintPaymentReceiptComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintPaymentReceiptRoutingModule { }
