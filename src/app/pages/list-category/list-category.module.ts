import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoryRoutingModule } from './list-category-routing.module';
import { ListCategoryComponent } from './list-category.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    ListCategoryRoutingModule,
	SharedModule
  ]
})
export class ListCategoryModule { }
