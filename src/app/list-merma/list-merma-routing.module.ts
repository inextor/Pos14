import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMermaComponent } from './list-merma.component';

const routes: Routes = [{ path: '', component: ListMermaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMermaRoutingModule { }
