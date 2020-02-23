import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../services/crud.service';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.page.html',
  styleUrls: ['./edit-quote.page.scss'],
})
export class EditQuotePage implements OnInit {
	selectedQuote ;
	quoteId = null;
	imgRelatedUrl = '../../assets/category/';
	imgExtension = '.svg';
	selectedCategoryText = 'add';
	author = null;
	description = null;
  constructor(
  			public activatedRoute: ActivatedRoute,
            public crudService: CrudService) { }

  async ngOnInit() {
  	this.quoteId = this.activatedRoute.snapshot.params.id;
  	console.log('params :: ', this.quoteId);
  	this.selectedQuote = await this.crudService.getItemById(this.quoteId);
  	  	console.log('returned :: ', this.selectedQuote);
  	if (this.selectedQuote) {
  	this.selectedCategoryText = this.selectedQuote.category;
  	this.author = this.selectedQuote.author;
  	this.description = this.selectedQuote.description;
  	}
  }

}
