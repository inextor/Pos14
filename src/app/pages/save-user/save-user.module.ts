import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveUserRoutingModule } from './save-user-routing.module';
import { SaveUserComponent } from './save-user.component';


@NgModule({
  declarations: [
    SaveUserComponent
  ],
  imports: [
    CommonModule,
    SaveUserRoutingModule
  ]
})
export class SaveUserModule { }
