import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ModalController, ModalOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalHelperService {

  constructor(
    private modalController: ModalController
  ) { }

  async openModal(options:ModalOptions) {
    return new Promise(async (resolve)=>{
      const modal = await this.modalController.create(options);
      await modal.present();
      modal.onDidDismiss().then((data) => {
       resolve(data);
      });
    })
    
  }
 
}
