import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientOrdersRoutingModule } from './client-orders-routing.module';
import { ClientOrdersComponent } from './client-orders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientOrdersComponent
  ],
  imports: [
    CommonModule,
    ClientOrdersRoutingModule,
	SharedModule,

  ]
})
export class ClientOrdersModule { }
