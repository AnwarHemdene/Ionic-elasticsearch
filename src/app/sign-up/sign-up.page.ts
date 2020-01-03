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
  	if (event.value.confirmPassword === event.value.password) {
		await this.verifyUserExist(event.value.username, event.value.confirmPassword);
	}else {
		console.log('not ok');
	}

  }
  verifyUserExist(username, password){
  	this.httpClient.get(URL + USERS + USER + `_search?q=username:${username}`)
      	.subscribe(async (res: any) => {
      		console.log(res.hits.hits);
      		if (res.hits.hits.length > 0){
      			console.log('username already exists');
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
      console.log('result here :: ', res);
      console.log(res.hasOwnProperty('result'));
      console.log('result here :: ', res.result);
      if (res.hasOwnProperty('result')){
      	if(res.result === 'created'){
      		this.loginUser();
	    }else {

	    }
      }

    },
      (error) => console.log(error));
  }
    loginUser() {
    this.authenticationService.login();
  } 
}
