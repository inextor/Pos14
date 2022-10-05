import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveItemRoutingModule } from './save-item-routing.module';
import { SaveItemComponent } from './save-item.component';


@NgModule({
  declarations: [
    SaveItemComponent
  ],
  imports: [
    CommonModule,
    SaveItemRoutingModule
  ]
})
export class SaveItemModule { }
