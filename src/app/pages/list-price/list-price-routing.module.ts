import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPriceComponent } from './list-price.component';

const routes: Routes = [{ path: '', component: ListPriceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPriceRoutingModule { }
