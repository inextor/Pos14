import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPriceListComponent } from './list-price-list.component';

const routes: Routes = [{ path: '', component: ListPriceListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPriceListRoutingModule { }
