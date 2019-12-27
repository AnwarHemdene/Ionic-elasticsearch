import { Injectable } from '@angular/core';
import {Platform, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);

  constructor(
      private router: Router,
      private storage: Storage,
      private platform: Platform,
      public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }


  login() {
    const response = {
      user_id: '007',
      user_name: 'test'
    };
    this.storage.set('USER_INFO', response).then(() => {
      this.router.navigate(['dashboard']);
      this.authState.next(true);
    });
  }

  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
