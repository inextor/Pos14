import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPriceTypeComponent } from './list-price-type.component';

const routes: Routes = [{ path: '', component: ListPriceTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPriceTypeRoutingModule { }
