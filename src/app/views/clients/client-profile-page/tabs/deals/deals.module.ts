import { DealsComponent } from './deals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { DealsRoutingModule } from './deals-routing.module';

import { PaginationModule } from 'ngx-bootstrap/pagination';
@NgModule({
  imports: [
    CommonModule,
    DealsRoutingModule,
    FormsModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    DealsComponent,

  ],
  providers: []
})
export class DealsModule { }
