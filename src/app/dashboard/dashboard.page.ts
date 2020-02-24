import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { HttpClient } from  '@angular/common/http';
import { URL, CATALOG, QUOTES} from '../../assets/variables';
import * as uuidv4 from 'uuid/v4';
import {Router} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {CrudService} from '../services/crud.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  category = [];
  connectedUser = {};
  nodata;
  constructor(private authenticationService: AuthenticationService,
              public httpClient: HttpClient,
              private router: Router,
              public alertService: AlertService,
              public crudService: CrudService
              )   { }

  async ngOnInit() {
    this.category = await this.crudService.get();
    this.nodata = this.category.length === 0;
  }
  logoutUser() { this.authenticationService.logout();}

  goToProfile(){
    this.router.navigate(['profile']);
  }
  addQuote(){
    this.router.navigate(['add-quote']);
  }
  editCard(id: any){
    console.log('clicked');
    this.alertService.presentActionSheet(id);
  }
}
