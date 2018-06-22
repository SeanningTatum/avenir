import { DealsComponent } from './deals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalComponent } from './modal/modal.component';
import { UnitService } from 'app/views/shared/services/units.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Routing
import { DealsRoutingModule } from './deals-routing.module';
@NgModule({
  imports: [
    CommonModule,
    DealsRoutingModule,
    FormsModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    DealsComponent,
    ModalComponent,

  ],
  providers: [UnitService]
})
export class DealsModule { }
