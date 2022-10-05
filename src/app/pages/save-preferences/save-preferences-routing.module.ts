import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavePreferencesComponent } from './save-preferences.component';

const routes: Routes = [{ path: '', component: SavePreferencesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavePreferencesRoutingModule { }
