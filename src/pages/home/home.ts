import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { GasIndividualPage } from '../gas-individual/gas-individual';

//FireBase
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Gasolineras: Observable<any[]>;
  constructor(public navCtrl: NavController, private modalCtrl: ModalController,
    afDB: AngularFireDatabase) {
    this.Gasolineras = afDB.list('Gasolinera').valueChanges();
  }



  goTogasIndividual() {
    this.navCtrl.push(GasIndividualPage);
    
  }

}
