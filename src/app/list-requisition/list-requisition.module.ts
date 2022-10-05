import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRequisitionRoutingModule } from './list-requisition-routing.module';
import { ListRequisitionComponent } from './list-requisition.component';


@NgModule({
  declarations: [
    ListRequisitionComponent
  ],
  imports: [
    CommonModule,
    ListRequisitionRoutingModule
  ]
})
export class ListRequisitionModule { }
