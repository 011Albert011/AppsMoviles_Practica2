import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  public titulo: string ='';

  constructor( public alertCtrl: AlertController ) { }

  ngOnInit() {
  }

  async presentInput() {

    const input = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Ingrese su nombre:',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: ( data ) => {
            console.log('Confirm Ok', data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    await input.present();

  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      backdropDismiss: false,
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
            text: 'Ok',
            handler: (blah) => {
              console.log('Botón OK');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertMultipleButtons(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      backdropDismiss: false,
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
            text: 'Ok',
            handler: (blah) => {
              console.log('Botón OK');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
  const alert = await this.alertCtrl.create({
    header: 'Prompt',
    inputs: [
      {
        name: 'name1', // Esta es la "llave" para recuperar el valor
        type: 'text',
        placeholder: 'Escribe algo aquí...'
      },
      {
        name: 'name2', // Esta es la "llave" para recuperar el valor
        type: 'text',
        id: 'name2-id',
        value: 'hello',
        placeholder: 'Escribe algo aquí...'
      },
      {
        name: 'name3', // Esta es la "llave" para recuperar el valor
        type: 'url',
        value: 'https://ionicframework.com',
        placeholder: 'Favorite site ever'
      },
      {
        name: 'name4', // Esta es la "llave" para recuperar el valor
        type: 'date',
        min: '2017-03-01',
        max: '2018-01-12'
      },
      {
        name: 'name5', // Esta es la "llave" para recuperar el valor
        type: 'number',
        min: -5,
        max: 10
      },
      {
        name: 'name6', // Esta es la "llave" para recuperar el valor
        type: 'number'
      },
      {
        name: 'name7', // Esta es la "llave" para recuperar el valor
        type: 'password',
        placeholder: 'Advanced attributes',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (data: any) => {
          // 'data' contiene el valor del input, ej: { nombreUsuario: 'valor' }
          console.log('Confirmar:', data);
        }
      }
    ]
  });

  await alert.present();
}

}
