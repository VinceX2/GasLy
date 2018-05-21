import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

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
              afDB: AngularFireDatabase) {
  this.Gasolineras = afDB.list('Gasolinera').valueChanges();
}

ionViewDidLoad() {
  console.log('ionViewDidLoad GasIndividualPage');
}

}
