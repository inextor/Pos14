import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiveShippingComponent } from './receive-shipping.component';

const routes: Routes = [{ path: '', component: ReceiveShippingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiveShippingRoutingModule { }
