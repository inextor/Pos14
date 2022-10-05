import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReturnsComponent } from './list-returns.component';

const routes: Routes = [{ path: '', component: ListReturnsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListReturnsRoutingModule { }
