import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommandaComponent } from './list-commanda.component';

const routes: Routes = [{ path: '', component: ListCommandaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCommandaRoutingModule { }
