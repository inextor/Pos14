import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSelectCategoryItemRoutingModule } from './client-select-category-item-routing.module';
import { ClientSelectCategoryItemComponent } from './client-select-category-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ClientSelectCategoryItemComponent
  ],
  imports: [
    CommonModule,
    ClientSelectCategoryItemRoutingModule,
	SharedModule
  ]
})
export class ClientSelectCategoryItemModule { }
