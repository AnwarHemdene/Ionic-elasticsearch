import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alert } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) { }
    async showAlert(customAlert: Alert) {
	const alert = await this.alertController.create({
	      header: customAlert.header,
	      subHeader: customAlert.subHeader,
	      message: customAlert.message,
	      buttons: customAlert.buttons
	    });

	    await alert.present();
    } 
}
