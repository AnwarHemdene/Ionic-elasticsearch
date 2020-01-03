import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import * as uuidv4 from 'uuid/v4';
import { URL, USERS, USER} from '../../assets/variables';
import { HttpClient } from  '@angular/common/http';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor(private authenticationService: AuthenticationService,
  	public httpClient: HttpClient) { }

  ngOnInit() {
  }
  async onSubmit(event: NgForm) {
   	if (true){
  		if (event.value.confirmPassword === event.value.password) {
	  		console.log('okkk');
	  		await this.createUser(event.value.username, event.value.confirmPassword);
	  	}else {
	  		console.log('not ok');
	  	}
  	}else {

  	}

  }
  verifyUsernameExist(username){
  	return true;
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
    .subscribe((res) => {
      console.log('result here :: ', res);
      if (res.result === "created") {
      	this.loginUser();
      }else {
      	console.log('error');
      }
      // console.log('item id: ', res._id );
      // console.log('result : ', res.result)
    },
      (error) => console.log(error));
  }
    loginUser() {
    this.authenticationService.login();
  }
}
