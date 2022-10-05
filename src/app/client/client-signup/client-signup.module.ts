import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSignupRoutingModule } from './client-signup-routing.module';
import { ClientSignupComponent } from './client-signup.component';


@NgModule({
  declarations: [
    ClientSignupComponent
  ],
  imports: [
    CommonModule,
    ClientSignupRoutingModule
  ]
})
export class ClientSignupModule { }
