import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPriceLogComponent } from './list-price-log.component';

const routes: Routes = [{ path: '', component: ListPriceLogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPriceLogRoutingModule { }
