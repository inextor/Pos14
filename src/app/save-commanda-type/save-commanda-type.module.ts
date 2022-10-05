import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveCommandaTypeRoutingModule } from './save-commanda-type-routing.module';
import { SaveCommandaTypeComponent } from './save-commanda-type.component';


@NgModule({
  declarations: [
    SaveCommandaTypeComponent
  ],
  imports: [
    CommonModule,
    SaveCommandaTypeRoutingModule
  ]
})
export class SaveCommandaTypeModule { }
