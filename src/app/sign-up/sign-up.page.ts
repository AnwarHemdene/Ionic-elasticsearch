import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import * as uuidv4 from 'uuid/v4';
import { URL, USERS, USER} from '../../assets/variables';
import { HttpClient } from  '@angular/common/http';
import {AuthenticationService} from '../services/authentication.service';
import {AlertService} from '../services/alert.service';
import { Alert } from '../interfaces/interfaces';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  	alert : Alert = {
  		header: 'title',
		subHeader: 'sub header',
		message: 'message',
		buttons: ['Ok']
  	}
  constructor(
  	private authenticationService: AuthenticationService,
  	public httpClient: HttpClient,
  	public alertService: AlertService
  	) { }

  ngOnInit() {
  }
  async onSubmit(event: NgForm) {
  	if (event.value.confirmPassword === event.value.password) {
		await this.verifyExist('username',event.value.username, event.value.confirmPassword);
	}else {
		// passwords are not equal
		this.alert.header = 'Error';
      	this.alert.subHeader = 'Password';
      	this.alert.message = 'Error, passwords are not equal';
      	this.alertService.showAlert(this.alert);
	}

  }
  verifyExist(element,username, password){
  	this.httpClient.get(URL + USERS + USER + `_search?q=${element}:${username}`)
      	.subscribe(async (res: any) => {
      		if (res.hits.hits.length > 0){
      			// username already exists
      			this.alert.header = 'Error';
		      	this.alert.subHeader = 'Username already exists';
		      	this.alert.message = 'Error, username already exists';
		      	this.alertService.showAlert(this.alert);
      		}else {
      			await this.createUser(username, password);
      		}
      	});
  }
    createUser(username, password) {
    const id = uuidv4();
    const createdAt = new Date();
    let url = URL + USERS + USER + id;
    this.httpClient.post(url, {
    "id": id,
    "username": username,
    "password": password,
    "createdAt": createdAt
    })
    .subscribe((res: any) => {
      if (res.hasOwnProperty('result')){
      	if(res.result === 'created'){
      		// user created 
      		this.alert.header = 'Success';
		    this.alert.subHeader = 'User created';
		    this.alert.message = 'Success, user created!';
		    this.alertService.showAlert(this.alert);
      		this.loginUser();
	    }else {
	    	// user couldnt be created
	    	this.alert.header = 'Error';
		    this.alert.subHeader = 'Server error';
		    this.alert.message = 'Error, user couldnt be created';
		    this.alertService.showAlert(this.alert);
	    }
      }

    });
  }
    loginUser() {
    this.authenticationService.login();
  }
}
