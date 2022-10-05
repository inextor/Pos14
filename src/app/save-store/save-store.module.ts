import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveStoreRoutingModule } from './save-store-routing.module';
import { SaveStoreComponent } from './save-store.component';


@NgModule({
  declarations: [
    SaveStoreComponent
  ],
  imports: [
    CommonModule,
    SaveStoreRoutingModule
  ]
})
export class SaveStoreModule { }
