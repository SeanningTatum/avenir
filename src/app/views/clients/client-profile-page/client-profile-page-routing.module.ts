import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientProfilePageComponent } from './client-profile-page.component';
import {TasksComponent } from 'app/views/clients/client-profile-page/tabs/tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: ClientProfilePageComponent,
    data: {title: 'Client profile page'},
    children: [
      {
        path: '',
        redirectTo: 'tasks',
      },
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: 'deals',
        loadChildren: './tabs/deals/deals.module#DealsModule'
      },
      {
        path: 'units-owned',
        loadChildren: './tabs/units-owned/units-owned.module#UnitsOwnedModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientProfilePageRoutingModule {}
