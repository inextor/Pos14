import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfflineResumeRoutingModule } from './offline-resume-routing.module';
import { OfflineResumeComponent } from './offline-resume.component';


@NgModule({
  declarations: [
    OfflineResumeComponent
  ],
  imports: [
    CommonModule,
    OfflineResumeRoutingModule
  ]
})
export class OfflineResumeModule { }
