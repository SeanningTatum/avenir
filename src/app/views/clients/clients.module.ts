import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientTableComponent } from './client-table/client-table.component';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from 'app/views/clients/clients-routing.module';
import { DataTableModule } from 'angular2-datatable';
import { ModalComponent } from './client-table/modal/modal.component';
import { SpinnerModule } from 'app/shared/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    DataTableModule,
    SpinnerModule
  ],
  declarations: [
    ClientsComponent,
    ClientTableComponent,
    ModalComponent
  ],
  providers: []
})
export class ClientsModule { }
