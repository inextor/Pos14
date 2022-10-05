import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSelectCategoryItemRoutingModule } from './client-select-category-item-routing.module';
import { ClientSelectCategoryItemComponent } from './client-select-category-item.component';


@NgModule({
  declarations: [
    ClientSelectCategoryItemComponent
  ],
  imports: [
    CommonModule,
    ClientSelectCategoryItemRoutingModule
  ]
})
export class ClientSelectCategoryItemModule { }
