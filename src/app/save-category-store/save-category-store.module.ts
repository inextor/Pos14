import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveCategoryStoreRoutingModule } from './save-category-store-routing.module';
import { SaveCategoryStoreComponent } from './save-category-store.component';


@NgModule({
  declarations: [
    SaveCategoryStoreComponent
  ],
  imports: [
    CommonModule,
    SaveCategoryStoreRoutingModule
  ]
})
export class SaveCategoryStoreModule { }
