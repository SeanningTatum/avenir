import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitsOwnedComponent } from './units-owned.component';

const routes: Routes = [
  { path: '', component: UnitsOwnedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitsOwnedRoutingModule { }
