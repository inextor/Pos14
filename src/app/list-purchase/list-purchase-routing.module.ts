import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPurchaseComponent } from './list-purchase.component';

const routes: Routes = [{ path: '', component: ListPurchaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPurchaseRoutingModule { }
