import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientPaymentComponent } from './add-client-payment.component';

const routes: Routes = [{ path: '', component: AddClientPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddClientPaymentRoutingModule { }
