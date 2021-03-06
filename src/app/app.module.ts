import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthenticationService} from './services/authentication.service';
import {AuthGuard} from './services/auth-guard.service';
import {AlertService } from './services/alert.service';
import {CrudService } from './services/crud.service';
import {IonicStorageModule} from '@ionic/storage';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  IonicStorageModule.forRoot(),
  HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
      AuthenticationService,
      AuthGuard,
      AlertService,
      CrudService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
