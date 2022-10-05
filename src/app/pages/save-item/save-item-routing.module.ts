import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveItemComponent } from './save-item.component';

const routes: Routes = [{ path: '', component: SaveItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveItemRoutingModule { }
