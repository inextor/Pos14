import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportClientsRoutingModule } from './report-clients-routing.module';
import { ReportClientsComponent } from './report-clients.component';


@NgModule({
  declarations: [
    ReportClientsComponent
  ],
  imports: [
    CommonModule,
    ReportClientsRoutingModule
  ]
})
export class ReportClientsModule { }
