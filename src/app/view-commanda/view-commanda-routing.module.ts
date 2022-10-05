import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCommandaComponent } from './view-commanda.component';

const routes: Routes = [{ path: '', component: ViewCommandaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCommandaRoutingModule { }
