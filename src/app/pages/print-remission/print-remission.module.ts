import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintRemissionRoutingModule } from './print-remission-routing.module';
import { PrintRemissionComponent } from './print-remission.component';


@NgModule({
  declarations: [
    PrintRemissionComponent
  ],
  imports: [
    CommonModule,
    PrintRemissionRoutingModule
  ]
})
export class PrintRemissionModule { }
