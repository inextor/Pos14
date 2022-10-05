import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCartComponent } from './c-cart.component';

const routes: Routes = [{ path: '', component: CCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCartRoutingModule { }
