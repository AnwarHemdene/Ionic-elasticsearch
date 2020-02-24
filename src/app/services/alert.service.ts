import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alert } from '../interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
  	public alertController: AlertController,
  	public actionSheetController: ActionSheetController,
      private router: Router) { }
    async showAlert(customAlert: Alert) {
	const alert = await this.alertController.create({
	      header: customAlert.header,
	      subHeader: customAlert.subHeader,
	      message: customAlert.message,
	      buttons: customAlert.buttons
	    });

	    await alert.present();
    } 
    async presentActionSheet(id: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Edit',
        icon: 'create',
        handler: () => {
          console.log('Edit clicked');
          console.log('navigate to edit quote with id ', id);
          // navigate to edit quote with id 
          this.router.navigate(['edit-quote', id]);
        }
      },{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.router.navigate(['delete-quote', id]);
          console.log('Delete clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
