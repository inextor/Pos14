import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStorageRoutingModule } from './list-storage-routing.module';
import { ListStorageComponent } from './list-storage.component';


@NgModule({
  declarations: [
    ListStorageComponent
  ],
  imports: [
    CommonModule,
    ListStorageRoutingModule
  ]
})
export class ListStorageModule { }
