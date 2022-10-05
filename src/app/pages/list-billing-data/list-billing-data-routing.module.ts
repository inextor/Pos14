import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBillingDataComponent } from './list-billing-data.component';

const routes: Routes = [{ path: '', component: ListBillingDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListBillingDataRoutingModule { }
