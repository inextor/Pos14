import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryOrderMapComponent } from './delivery-order-map.component';

const routes: Routes = [{ path: '', component: DeliveryOrderMapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryOrderMapRoutingModule { }
