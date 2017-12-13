import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  errorOccured = new Subject<string>();

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState;
  }

  isSignedIn() {
    return this.afAuth.authState;
  }

  login(username, password) {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithEmailAndPassword(username, password)
      .catch( (error) => {
        this.errorOccured.next(error);
      });
  }

  logout() {
    this.afAuth.auth.signOut()
      .then( () => {
        this.router.navigateByUrl('');
      })

  }


}
