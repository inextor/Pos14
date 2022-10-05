import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveStorageComponent } from './save-storage.component';

const routes: Routes = [{ path: '', component: SaveStorageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveStorageRoutingModule { }
