import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfflineResumeComponent } from './offline-resume.component';

const routes: Routes = [{ path: '', component: OfflineResumeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfflineResumeRoutingModule { }
