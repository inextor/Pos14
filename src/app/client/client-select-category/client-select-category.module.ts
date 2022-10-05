import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSelectCategoryRoutingModule } from './client-select-category-routing.module';
import { ClientSelectCategoryComponent } from './client-select-category.component';


@NgModule({
  declarations: [
    ClientSelectCategoryComponent
  ],
  imports: [
    CommonModule,
    ClientSelectCategoryRoutingModule
  ]
})
export class ClientSelectCategoryModule { }
