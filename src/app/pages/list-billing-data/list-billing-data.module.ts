import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBillingDataRoutingModule } from './list-billing-data-routing.module';
import { ListBillingDataComponent } from './list-billing-data.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListBillingDataComponent
  ],
  imports: [
    CommonModule,
    ListBillingDataRoutingModule,
	SharedModule
  ]
})
export class ListBillingDataModule { }
