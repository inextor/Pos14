import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCommandaRoutingModule } from './list-commanda-routing.module';
import { ListCommandaComponent } from './list-commanda.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListCommandaComponent
  ],
  imports: [
    CommonModule,
    ListCommandaRoutingModule,
	SharedModule
  ]
})
export class ListCommandaModule { }
