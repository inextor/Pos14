import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListShippingComponent } from './list-shipping.component';

const routes: Routes = [{ path: '', component: ListShippingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListShippingRoutingModule { }
