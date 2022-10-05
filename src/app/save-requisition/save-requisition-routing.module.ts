import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveRequisitionComponent } from './save-requisition.component';

const routes: Routes = [{ path: '', component: SaveRequisitionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveRequisitionRoutingModule { }
