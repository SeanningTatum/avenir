import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  errorSub: Subscription;
  error: string;
  showSpinner: Boolean = false;

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.isSignedIn()
      .subscribe((user) => {
        if (user) this.router.navigate(['/dashboard'])
      });

    this.errorSub = this.authService.errorOccured
      .subscribe( (error) => {
        this.error = error;
        this.showSpinner = false;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.errorSub.unsubscribe();
  }

  login(username: string, password: string) {
    this.showSpinner = true;
    this.authService.login(username, password);
  }
}
