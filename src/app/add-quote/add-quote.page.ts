import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Storage } from '@ionic/storage';
import * as uuidv4 from 'uuid/v4';
import { HttpClient } from  '@angular/common/http';
import {AlertService} from '../services/alert.service';
import { URL, QUOTES, QUOTE} from '../../assets/variables';
import { Alert } from '../interfaces/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.page.html',
  styleUrls: ['./add-quote.page.scss'],
})
export class AddQuotePage implements OnInit {
      alert : Alert = {
    header: 'title',
    subHeader: 'sub header',
    message: 'message',
    buttons: ['Ok']
    }
	category = ["Inspire", "Management", "Sports", "Life", "Funny", "Love", "Art", "Students"];
  imgRelatedUrl = '../../assets/category/';
  imgExtension = '.svg';
	selectedCategoryText = 'add';
  currentUser = null;
  constructor(
      private storage: Storage,
      public httpClient: HttpClient,
      public alertService: AlertService,
      private router: Router
      ) {
  this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.currentUser = response.user_id;
        console.log('current user id: ', this.currentUser); 
      }
    });
}

  ngOnInit() {
  }
  async onSubmit(event: NgForm) {
    let quote = event.form.value;
    Object.assign(quote,
      {
        creator: this.currentUser,
        category: this.selectedCategoryText ? this.selectedCategoryText : this.category[0],
        imgUrl: `${this.selectedCategoryText ? this.selectedCategoryText : this.category[0]}.svg`,
        createdAt: new Date(),
        updatedAt: null});
    this.createQuote(quote);
    // console.log('event :: ', quote);
  }
  createQuote(quote){
    const id = uuidv4();
        let url = URL + QUOTES + QUOTE + id;
        Object.assign(quote, {id});
        console.log(quote);
    this.httpClient.post(url, quote)
    .subscribe((res: any) => {
      if (res.hasOwnProperty('result')){
        if(res.result === 'created'){
          // quote created 
          this.alert.header = 'Success';
        this.alert.subHeader = 'Quote created';
        this.alert.message = 'Success, quote created!';
        this.alertService.showAlert(this.alert);
        this.router.navigate(['dashboard']);
      }else {
        // quote couldnt be created
        this.alert.header = 'Error';
        this.alert.subHeader = 'Server error';
        this.alert.message = 'Error, quote couldnt be created';
        this.alertService.showAlert(this.alert);
      }
      }

    });
  }
  selectedCategory(item){
  	this.selectedCategoryText = item;
  	console.log(item);
  }
}
