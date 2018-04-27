import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

//FireBase
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-gas-individual',
  templateUrl: 'gas-individual.html',
})
export class GasIndividualPage {
  Gasolineras: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,afDB: AngularFireDatabase) {
  this.Gasolineras = afDB.list('Gasolinera').valueChanges();
}

ionViewDidLoad() {
  console.log('ionViewDidLoad GasIndividualPage');
}

}
