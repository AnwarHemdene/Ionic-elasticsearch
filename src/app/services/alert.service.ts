import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) { }
    async showAlert() {
	const alert = await this.alertController.create({
	      header: 'Alert',
	      subHeader: 'Subtitle',
	      message: 'This is an alert message.',
	      buttons: ['OK']
	    });

	    await alert.present();
    } 
}
