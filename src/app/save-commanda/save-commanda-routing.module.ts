import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveCommandaComponent } from './save-commanda.component';

const routes: Routes = [{ path: '', component: SaveCommandaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveCommandaRoutingModule { }
