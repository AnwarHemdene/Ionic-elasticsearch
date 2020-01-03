import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { HttpClient } from  '@angular/common/http';
import { URL, CATALOG, QUOTES} from '../../assets/variables';
import * as uuidv4 from 'uuid/v4';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private authenticationService: AuthenticationService, public httpClient: HttpClient) { }

  ngOnInit() {}
  logoutUser() { this.authenticationService.logout();}
  post() {
    const id = uuidv4();
    const createdAt = new Date();
    let url = URL + CATALOG + QUOTES + id;
    this.httpClient.post(url, {
    "id": id,

    "title": "Mastering Elasticsearch 2",

    "description": "Mastering Elasticsearch 2",

    "author": "Anwar Hemdene",

    "createdAt": createdAt,

    "updatedAt": null

    })
    .subscribe((res) => {
      console.log(res);
      // console.log('item id: ', res._id );
      // console.log('result : ', res.result)
    },
      (error) => console.log(error));
  }
  get(){
    // get all documents under index 
  	this.httpClient.get(URL + CATALOG + QUOTES + '_search?')
  		.subscribe((res) => 
        {
          console.log(res);
          // const result = res.hits.hits;
          // if (result.length !== 0 ) {
          //   console.log(result);
          //   result.filter((item, index) => {
          //     console.log('item '+ index, item._source);
          //   })
          // } else {
          //   console.log('emptyyy !! ');
          // }
        },
  		(error) => console.log(error));
  }
  update() {
    const createdAt = new Date();
    const url = URL + CATALOG + QUOTES + '45af080e-0053-475b-b197-147aa2d69ba1' + '/_update';
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
      this.httpClient.delete(URL + CATALOG + QUOTES + 'a362c812-2584-4c59-abe4-fff636609519')
      .subscribe((res) => console.log(res),
      (error) => console.log(error));
  }
  getItemById(){
    // get document by id
        this.httpClient.get(URL + CATALOG + QUOTES + '45af080e-0053-475b-b197-147aa2d69ba1')
      .subscribe((res) => console.log(res),
      (error) => console.log(error));
  }
}
