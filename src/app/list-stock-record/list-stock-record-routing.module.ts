import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStockRecordComponent } from './list-stock-record.component';

const routes: Routes = [{ path: '', component: ListStockRecordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListStockRecordRoutingModule { }
