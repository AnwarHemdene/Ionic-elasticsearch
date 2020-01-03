import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  onSubmit(event: NgForm) {
  	console.log('event :: ', event.value.confirmPassword);
  	console.log('event :: ', event.value.password);
  	if (verifyUsernameExist(event.value.username)){
  		if (event.value.confirmPassword === event.value.password) {
	  		console.log('okkk')
	  	}else {
	  		console.log('not ok');
	  	}
  	}else {

  	}

  }
  verifyUsernameExist(username){
  	return true;
  }
}
