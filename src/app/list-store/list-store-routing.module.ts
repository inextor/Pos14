import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStoreComponent } from './list-store.component';

const routes: Routes = [{ path: '', component: ListStoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListStoreRoutingModule { }
