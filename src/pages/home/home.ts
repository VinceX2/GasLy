import { Component } from '@angular/core';
import { NavController,ToastController, MenuController} from 'ionic-angular';
import { GasIndividualPage } from '../gas-individual/gas-individual';
import { EstacionPage } from '../estacion/estacion';

//FireBase
import {AngularFireDatabase} from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../../models/profile/profile';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  profile = {} as Profile;
  Gasolineras: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
    private toast: ToastController,
    private menu: MenuController
  ) {
    this.Gasolineras = afDB.list("Gasolinera").valueChanges();
    this.menu.enable(true);
  }
  goTogasIndividual() {
    this.navCtrl.push(EstacionPage);
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        //const user = this.afAuth.auth.currentUser;
        //this.profile.name = user.displayName;
        this.toast.create({
            message: `Bienvenido a GasLy`,
            duration: 3000
          }).present();
      } 
    });
  }
}
