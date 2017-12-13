import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoadingSpinnerComponent } from 'app/shared/loading-spinner/loading-spinner.component';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, LoadingSpinnerComponent],
  providers: [],
})
export class LoginModule { }
