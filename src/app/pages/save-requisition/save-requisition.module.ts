import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveRequisitionRoutingModule } from './save-requisition-routing.module';
import { SaveRequisitionComponent } from './save-requisition.component';


@NgModule({
  declarations: [
    SaveRequisitionComponent
  ],
  imports: [
    CommonModule,
    SaveRequisitionRoutingModule
  ]
})
export class SaveRequisitionModule { }
