import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStorageComponent } from './list-storage.component';

const routes: Routes = [{ path: '', component: ListStorageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListStorageRoutingModule { }
