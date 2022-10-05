import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveCategoryRoutingModule } from './save-category-routing.module';
import { SaveCategoryComponent } from './save-category.component';


@NgModule({
  declarations: [
    SaveCategoryComponent
  ],
  imports: [
    CommonModule,
    SaveCategoryRoutingModule
  ]
})
export class SaveCategoryModule { }
