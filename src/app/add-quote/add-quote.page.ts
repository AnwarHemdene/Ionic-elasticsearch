import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.page.html',
  styleUrls: ['./add-quote.page.scss'],
})
export class AddQuotePage implements OnInit {
	category = [
	"Inspire", "Management", "Sports", "Life", "Funny", "Love", "Art", "Students"
	];
  constructor() { }

  ngOnInit() {
  }
  async onSubmit(event: NgForm) {}
  selectedCategory(item){
  	console.log(item);
  }
}
