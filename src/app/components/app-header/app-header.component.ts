import { AuthService } from '../../views/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  userName: string;
  user$: Observable<firebase.User>

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user$ = this.auth.isSignedIn();
  }

  logout() {this.auth.logout()}
}
