import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientTableComponent } from './client-table/client-table.component';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from 'app/views/clients/clients-routing.module';
import { DataTableModule } from 'angular2-datatable';
import { ModalComponent } from './client-table/modal/modal.component';
import { ClientSpinnerComponent } from 'app/shared/client-spinner/client-spinner.component';

import { DataFilterPipe } from 'app/views/clients/client-table/data-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    DataTableModule
  ],
  declarations: [
    ClientsComponent,
    ClientTableComponent,
    DataFilterPipe,
    ModalComponent,
    ClientSpinnerComponent
  ],
  providers: []
})
export class ClientsModule { }
