import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommandaTypeComponent } from './list-commanda-type.component';

const routes: Routes = [{ path: '', component: ListCommandaTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCommandaTypeRoutingModule { }
