import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitsComponent } from './units.component';
import { UnitsTableComponent } from 'app/views/units/units-table/units-table.component';
import { UnitsPageComponent } from 'app/views/units/units-page/units-page.component';

const routes: Routes = [
  {
    path: '',
    component: UnitsComponent,
    data: {
      title: 'Units'
    },
    children: [
      {
        path: '',
        redirectTo: 'units-table',
        pathMatch: 'full'
      },
      {
        path: 'units-table',
        component: UnitsTableComponent
      },
      {
        path: ':key',
        component: UnitsPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitsRoutingModule { }
