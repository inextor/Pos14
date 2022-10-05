import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoryPriceRoutingModule } from './list-category-price-routing.module';
import { ListCategoryPriceComponent } from './list-category-price.component';


@NgModule({
  declarations: [
    ListCategoryPriceComponent
  ],
  imports: [
    CommonModule,
    ListCategoryPriceRoutingModule
  ]
})
export class ListCategoryPriceModule { }
