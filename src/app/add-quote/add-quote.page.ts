import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Storage } from '@ionic/storage';
import {CrudService} from '../services/crud.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.page.html',
  styleUrls: ['./add-quote.page.scss'],
})
export class AddQuotePage implements OnInit {
	category = ["Inspire", "Management", "Sports", "Life", "Funny", "Love", "Art", "Students"];
  imgRelatedUrl = '../../assets/category/';
  imgExtension = '.svg';
	selectedCategoryText = 'add';
  currentUser = null;
  constructor(
      private storage: Storage,
      public crudService: CrudService
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
    this.crudService.createQuote(quote);
    // console.log('event :: ', quote);
  }
  selectedCategory(item){
  	this.selectedCategoryText = item;
  	console.log(item);
  }
}
