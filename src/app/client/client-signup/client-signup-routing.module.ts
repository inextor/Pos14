import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSignupComponent } from './client-signup.component';

const routes: Routes = [{ path: '', component: ClientSignupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSignupRoutingModule { }
