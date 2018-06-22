import { NgModule } from '@angular/core';

import { UnitsOwnedComponent } from './units-owned.component';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from 'app/shared/spinner.module';

// Routing
import { UnitsOwnedRoutingModule } from 'app/views/clients/client-profile-page/tabs/units-owned/units-owned-routing.module';
import { UnitService } from 'app/views/shared/services/units.service';

@NgModule({
  declarations: [
    UnitsOwnedComponent,
  ],
  imports: [
    UnitsOwnedRoutingModule,
    CommonModule,
    SpinnerModule
  ],
  providers: [UnitService],
})
export class UnitsOwnedModule { }
