import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveStorageRoutingModule } from './save-storage-routing.module';
import { SaveStorageComponent } from './save-storage.component';


@NgModule({
  declarations: [
    SaveStorageComponent
  ],
  imports: [
    CommonModule,
    SaveStorageRoutingModule
  ]
})
export class SaveStorageModule { }
