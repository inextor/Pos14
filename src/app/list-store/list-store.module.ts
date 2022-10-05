import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStoreRoutingModule } from './list-store-routing.module';
import { ListStoreComponent } from './list-store.component';


@NgModule({
  declarations: [
    ListStoreComponent
  ],
  imports: [
    CommonModule,
    ListStoreRoutingModule
  ]
})
export class ListStoreModule { }
