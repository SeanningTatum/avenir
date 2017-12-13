import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
