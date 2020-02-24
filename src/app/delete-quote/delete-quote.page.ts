import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../services/crud.service';
@Component({
  selector: 'app-delete-quote',
  templateUrl: './delete-quote.page.html',
  styleUrls: ['./delete-quote.page.scss'],
})
export class DeleteQuotePage implements OnInit {
	deleted;
  constructor(
  			public activatedRoute: ActivatedRoute,
            public crudService: CrudService) { }

  async ngOnInit() {
  	this.deleted = await this.crudService.delete(this.activatedRoute.snapshot.params.id);
  	console.log('on delete', this.deleted);
  }

}
