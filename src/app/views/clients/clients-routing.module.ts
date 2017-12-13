import { ClientsComponent } from './clients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientTableComponent } from './client-table/client-table.component';
import { ClientProfilePageComponent } from './client-profile-page/client-profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    data: {title: 'Clients'},
    children: [
        {
          path: '',
          redirectTo: 'client-table',
          pathMatch: 'full'
        },
        {
          path: 'client-table',
          component: ClientTableComponent
        },
        {
          path: ':key',
          loadChildren:  './client-profile-page/client-profile-page.module#ClientProfilePageModule'
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {}
