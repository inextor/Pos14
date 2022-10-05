import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemRoutingModule } from './list-item-routing.module';
import { ListItemComponent } from './list-item.component';


@NgModule({
  declarations: [
    ListItemComponent
  ],
  imports: [
    CommonModule,
    ListItemRoutingModule
  ]
})
export class ListItemModule { }
