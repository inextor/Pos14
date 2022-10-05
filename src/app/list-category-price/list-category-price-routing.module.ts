import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryPriceComponent } from './list-category-price.component';

const routes: Routes = [{ path: '', component: ListCategoryPriceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCategoryPriceRoutingModule { }
