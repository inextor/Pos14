import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveStockRecordComponent } from './save-stock-record.component';

const routes: Routes = [{ path: '', component: SaveStockRecordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveStockRecordRoutingModule { }
