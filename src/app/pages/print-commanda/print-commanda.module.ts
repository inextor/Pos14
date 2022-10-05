import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintCommandaRoutingModule } from './print-commanda-routing.module';
import { PrintCommandaComponent } from './print-commanda.component';


@NgModule({
  declarations: [
    PrintCommandaComponent
  ],
  imports: [
    CommonModule,
    PrintCommandaRoutingModule
  ]
})
export class PrintCommandaModule { }
