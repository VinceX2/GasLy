import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { GasIndividualPage } from '../gas-individual/gas-individual';

//FireBase
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Send } from './../../models/message/send.model';
import {SendMessageService } from './../../services/messagelist/messagelist.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message: Send = {
    message: '',
  }
  Gasolineras: Observable<any[]>;
  constructor(public navCtrl: NavController, private modalCtrl: ModalController,
    afDB: AngularFireDatabase,private add: SendMessageService) {
    this.Gasolineras = afDB.list('Gasolinera').valueChanges();
  }

  goTogasIndividual() {
    this.navCtrl.push(GasIndividualPage);

  }

  addMessage(message:Send){
    this.add.addMessage(message).then(ref => {
      console.log(ref.key);
    })
    this.message.message = "";
    //Prueba
  }
}
