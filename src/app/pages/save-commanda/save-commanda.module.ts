import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveCommandaRoutingModule } from './save-commanda-routing.module';
import { SaveCommandaComponent } from './save-commanda.component';


@NgModule({
  declarations: [
    SaveCommandaComponent
  ],
  imports: [
    CommonModule,
    SaveCommandaRoutingModule
  ]
})
export class SaveCommandaModule { }
