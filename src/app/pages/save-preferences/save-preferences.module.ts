import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavePreferencesRoutingModule } from './save-preferences-routing.module';
import { SavePreferencesComponent } from './save-preferences.component';


@NgModule({
  declarations: [
    SavePreferencesComponent
  ],
  imports: [
    CommonModule,
    SavePreferencesRoutingModule
  ]
})
export class SavePreferencesModule { }
