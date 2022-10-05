import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakePaymentMobileComponent } from './make-payment-mobile.component';

const routes: Routes = [{ path: '', component: MakePaymentMobileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakePaymentMobileRoutingModule { }
