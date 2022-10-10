import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStoreRoutingModule } from './list-store-routing.module';
import { ListStoreComponent } from './list-store.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListStoreComponent
  ],
  imports: [
    CommonModule,
    ListStoreRoutingModule,
	SharedModule,
  ]
})
export class ListStoreModule { }
