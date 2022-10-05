import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewShippingComponent } from './view-shipping.component';

const routes: Routes = [{ path: '', component: ViewShippingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewShippingRoutingModule { }
