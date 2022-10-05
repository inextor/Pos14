import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersReportRoutingModule } from './orders-report-routing.module';
import { OrdersReportComponent } from './orders-report.component';


@NgModule({
  declarations: [
    OrdersReportComponent
  ],
  imports: [
    CommonModule,
    OrdersReportRoutingModule
  ]
})
export class OrdersReportModule { }
