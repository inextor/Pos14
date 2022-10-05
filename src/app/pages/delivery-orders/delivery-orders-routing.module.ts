import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryOrdersComponent } from './delivery-orders.component';

const routes: Routes = [{ path: '', component: DeliveryOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryOrdersRoutingModule { }
