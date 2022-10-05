import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveCommandaTypeComponent } from './save-commanda-type.component';

const routes: Routes = [{ path: '', component: SaveCommandaTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveCommandaTypeRoutingModule { }
