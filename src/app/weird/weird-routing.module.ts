import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeirdComponent } from './weird.component';

const routes: Routes = [{ path: '', component: WeirdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeirdRoutingModule { }
