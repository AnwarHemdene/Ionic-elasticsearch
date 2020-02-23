import { Injectable } from '@angular/core';
import * as uuidv4 from 'uuid/v4';
import { HttpClient } from  '@angular/common/http';
import {AlertService} from '../services/alert.service';
import { URL, QUOTES, QUOTE} from '../../assets/variables';
import { Alert } from '../interfaces/interfaces';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  alert : Alert = {
    header: 'title',
    subHeader: 'sub header',
    message: 'message',
    buttons: ['Ok']
    }
  constructor(
      public httpClient: HttpClient,
      public alertService: AlertService,
      private router: Router) { }

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
  get(){
  	let category = [];
    // get all documents under index 
  	this.httpClient.get(URL  + QUOTES + QUOTE +'_search?')
  		.subscribe((res: any) => 
        {          
          const result = res.hits.hits;
          if (result.length !== 0 ) {
            console.log(result);
            result.filter((item, index) => {
              console.log('item '+ index, item._source);
              category.push(item._source);
            });
            
          } else {
            console.log('emptyyy !! ');
          }
        },
  		(error) => console.log(error));
  		return category;
  }
  update() {
    const createdAt = new Date();
    const url = URL + QUOTES + '45af080e-0053-475b-b197-147aa2d69ba1' + '/_update';
    this.httpClient.post(url,
      {
        "doc": {
    "id": '45af080e-0053-475b-b197-147aa2d69ba1',

    "title": "Mastering 45 2",

    "description": "Mastering 876 2",

    "author": "Anwar Hemdene 2",

    "createdAt": createdAt,

    "updatedAt": null
        }
      })
    .subscribe((res) => {
      console.log(res);
      // console.log('item id: ', res._id );
      // console.log('result : ', res.result)
    },
      (error) => console.log(error));
  }
  delete(){
      this.httpClient.delete(URL + QUOTES + 'a362c812-2584-4c59-abe4-fff636609519')
      .subscribe((res) => console.log(res),
      (error) => console.log(error));
  }
  getItemById(id){
    // get document by id
    let data;
        this.httpClient.get(URL + QUOTES + QUOTE+ id)
      .subscribe((res: any) => {
      	console.log(res);
      	if (res) {
      		data = res._source;
      	}
      },
      (error) => console.log('errrr:', error));
      return data;
  }
}
