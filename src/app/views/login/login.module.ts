import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SpinnerModule } from 'app/shared/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SpinnerModule
  ],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule { }
