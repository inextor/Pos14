import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveClientComponent } from './save-client.component';

const routes: Routes = [{ path: '', component: SaveClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveClientRoutingModule { }
