import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportClientsComponent } from './report-clients.component';

const routes: Routes = [{ path: '', component: ReportClientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportClientsRoutingModule { }
