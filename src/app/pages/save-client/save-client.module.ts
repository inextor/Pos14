import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveClientRoutingModule } from './save-client-routing.module';
import { SaveClientComponent } from './save-client.component';


@NgModule({
  declarations: [
    SaveClientComponent
  ],
  imports: [
    CommonModule,
    SaveClientRoutingModule
  ]
})
export class SaveClientModule { }
