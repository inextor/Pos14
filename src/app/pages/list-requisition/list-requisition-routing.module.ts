import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRequisitionComponent } from './list-requisition.component';

const routes: Routes = [{ path: '', component: ListRequisitionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRequisitionRoutingModule { }
