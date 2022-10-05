import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockReportRoutingModule } from './stock-report-routing.module';
import { StockReportComponent } from './stock-report.component';


@NgModule({
  declarations: [
    StockReportComponent
  ],
  imports: [
    CommonModule,
    StockReportRoutingModule
  ]
})
export class StockReportModule { }
