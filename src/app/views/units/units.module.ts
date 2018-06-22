import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular2-datatable';
import { UnitsComponent } from './units.component';
import { UnitsRoutingModule } from 'app/views/units/units-routing.module';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'app/shared/spinner.module';
import { UnitService } from 'app/views/shared/services/units.service';
import { UnitsTableComponent } from './units-table/units-table.component';
import { UnitsPageComponent } from './units-page/units-page.component';
import { ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UnitsRoutingModule,
    DataTableModule,
    SpinnerModule,
    ToasterModule
  ],
  declarations: [
    UnitsComponent,
    UnitsTableComponent,
    UnitsPageComponent
  ],
  providers: [UnitService],
})
export class UnitsModule { }
