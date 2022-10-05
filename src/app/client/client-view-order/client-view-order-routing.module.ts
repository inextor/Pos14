import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientViewOrderComponent } from './client-view-order.component';

const routes: Routes = [{ path: '', component: ClientViewOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientViewOrderRoutingModule { }
