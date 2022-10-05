import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { DashboardUserComponent } from './dashboard-user.component';


@NgModule({
  declarations: [
    DashboardUserComponent
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule
  ]
})
export class DashboardUserModule { }
