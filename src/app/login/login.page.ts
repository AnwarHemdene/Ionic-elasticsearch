import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {AlertService} from '../services/alert.service';
import {NgForm} from '@angular/forms';
import { URL, USERS, USER} from '../../assets/variables';
import { HttpClient } from  '@angular/common/http';
import { Alert } from '../interfaces/interfaces';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
  	private authenticationService: AuthenticationService,
  	public httpClient: HttpClient,
  	public alertService: AlertService) { }

  ngOnInit() {
  }
  loginUser() {
    this.authenticationService.login();
  }
  onSubmit(event: NgForm) {
  	this.getUser(event.value.username, event.value.password);
  }
  getUser(username, password){
  	const alert : Alert = {
  		header: 'title',
		subHeader: 'sub header',
		message: 'message',
		buttons: ['Ok']
  	}
    // get document by id
    this.httpClient.get(URL + USERS + USER + `_search?q=username:${username}`)
      	.subscribe((res: any) => {
      		if (res.hits.hits.length > 0){
      			console.log('user exists', res.hits.hits[0]._source);
      			if (res.hits.hits[0]._source.password === password){
      				// user connected 
      				alert.header = 'Success';
	      			alert.subHeader = 'Authorised access';
	      			alert.message = 'User Logged in';
	      			this.alertService.showAlert(alert);
      				this.loginUser();
      			}else {
      				// wrong password
      				alert.header = 'Error';
	      			alert.subHeader = 'Passwords';
	      			alert.message = 'Error, wrong password';
	      			this.alertService.showAlert(alert);
      			}
      		}else {
      			// User doesnt exist 
      			alert.header = 'Error';
      			alert.subHeader = 'User doesnt exist';
      			alert.message = 'Error, user doesnt exist';
      			this.alertService.showAlert(alert);
      		}
      	});
}
}
