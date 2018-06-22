import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { ClientProfilePageRoutingModule } from './client-profile-page-routing.module';

// Components
import { ClientProfilePageComponent } from './client-profile-page.component';
import { ClientCardComponent } from './client-card/client-card.component';
import { CreateTaskComponent } from './tabs/tasks/create-task/create-task.component';
import { TabsComponent } from './tabs/tabs.component';
import { TasksComponent } from './tabs/tasks/tasks.component';
import { TaskComponent } from './tabs/tasks/task/task.component';
import { TaskCardComponent } from './tabs/tasks/task-card/task-card.component';

// 3rd party imports
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SpinnerModule } from 'app/shared/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    ClientProfilePageRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    SpinnerModule
  ],
  declarations: [
    ClientProfilePageComponent,
    ClientCardComponent,
    TabsComponent,
    TasksComponent,
    CreateTaskComponent,
    TaskComponent,
    TaskCardComponent
  ],
  providers: []
})
export class ClientProfilePageModule { }
