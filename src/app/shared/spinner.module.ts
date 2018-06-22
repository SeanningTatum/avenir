import { NgModule } from '@angular/core';
import { FullWidthSpinnerComponent } from 'app/shared/loading-spinner/loading-spinner.component';
import { LoadingSpinnerComponent } from 'app/shared/client-spinner/client-spinner.component';
import { DataFilterPipe } from 'app/views/shared/directives/data-filter.pipe';

@NgModule({
  exports: [FullWidthSpinnerComponent, LoadingSpinnerComponent, DataFilterPipe],
  declarations: [FullWidthSpinnerComponent, LoadingSpinnerComponent, DataFilterPipe],
})
export class SpinnerModule { }
