import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async showToast(text: string, time: number, position: any, showClose: boolean = false, closeText: string = 'Close') { 
    const toast = await this.toastCtrl.create({
      color: 'dark',
      message: text,
      duration: time,
      position: position,
      showCloseButton: showClose,
      closeButtonText: closeText
    });
    toast.present();
  }

}
