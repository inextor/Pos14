import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveUserComponent } from './save-user.component';

const routes: Routes = [{ path: '', component: SaveUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveUserRoutingModule { }
