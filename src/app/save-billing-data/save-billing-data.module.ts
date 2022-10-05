import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveBillingDataRoutingModule } from './save-billing-data-routing.module';
import { SaveBillingDataComponent } from './save-billing-data.component';


@NgModule({
  declarations: [
    SaveBillingDataComponent
  ],
  imports: [
    CommonModule,
    SaveBillingDataRoutingModule
  ]
})
export class SaveBillingDataModule { }
