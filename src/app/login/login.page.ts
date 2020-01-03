import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {NgForm} from '@angular/forms';
import { URL, USERS, USER} from '../../assets/variables';
import { HttpClient } from  '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authenticationService: AuthenticationService,
  	public httpClient: HttpClient) { }

  ngOnInit() {
  }
  loginUser() {
    this.authenticationService.login();
  }
  onSubmit(event: NgForm) {
  	console.log('event :: ', event.value);
  	this.getUser(event.value.username, event.value.password);
  }
  getUser(username, password){
    // get document by id
        this.httpClient.get(URL + USERS + USER + `_search?q=username:${username}`)
      .subscribe((res) => {
      	console.log(res);
      	console.log(res.hits.hits);
      	if (res.hits.hits.length > 0){
      		console.log('user exists', res.hits.hits[0]._source);
      		if (res.hits.hits[0]._source.password === password){
      			console.log('connected !');
      			this.loginUser();
      		}else {
      			console.log('not connected !');
      		}
      	}else {
      		console.log('user doesnt exists');
      	}
      },
      (error) => console.log(error));
  }
}
