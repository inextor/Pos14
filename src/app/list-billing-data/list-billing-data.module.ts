import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBillingDataRoutingModule } from './list-billing-data-routing.module';
import { ListBillingDataComponent } from './list-billing-data.component';


@NgModule({
  declarations: [
    ListBillingDataComponent
  ],
  imports: [
    CommonModule,
    ListBillingDataRoutingModule
  ]
})
export class ListBillingDataModule { }
