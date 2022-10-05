import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveTableComponent } from './save-table.component';

const routes: Routes = [{ path: '', component: SaveTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveTableRoutingModule { }
