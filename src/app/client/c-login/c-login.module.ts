import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CLoginRoutingModule } from './c-login-routing.module';
import { CLoginComponent } from './c-login.component';


@NgModule({
  declarations: [
    CLoginComponent
  ],
  imports: [
    CommonModule,
    CLoginRoutingModule
  ]
})
export class CLoginModule { }
