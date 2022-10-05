import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderWaiterComponent } from './list-order-waiter.component';

const routes: Routes = [{ path: '', component: ListOrderWaiterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOrderWaiterRoutingModule { }
