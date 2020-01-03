import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  loginUser() {
    this.authenticationService.login();
  }
  onSubmit(event: NgForm) {
  	console.log('event :: ', event.value);
  }
}
