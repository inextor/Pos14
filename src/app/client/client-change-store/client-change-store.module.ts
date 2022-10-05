import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientChangeStoreRoutingModule } from './client-change-store-routing.module';
import { ClientChangeStoreComponent } from './client-change-store.component';


@NgModule({
  declarations: [
    ClientChangeStoreComponent
  ],
  imports: [
    CommonModule,
    ClientChangeStoreRoutingModule
  ]
})
export class ClientChangeStoreModule { }
