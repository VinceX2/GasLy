import { Component } from '@angular/core';
import { NavController,ToastController} from 'ionic-angular';
import { GasIndividualPage } from '../gas-individual/gas-individual';

//FireBase
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  Gasolineras: Observable<any[]>;
  constructor(public navCtrl: NavController, 
              private afAuth: AngularFireAuth,
              private afDB: AngularFireDatabase,
              private toast: ToastController) {
    
    this.Gasolineras = afDB.list('Gasolinera').valueChanges();
  }

  goTogasIndividual() {
    this.navCtrl.push(GasIndividualPage);

  }


  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){
        this.toast.create({
          message: `Bienvenido a GasLy`,
          duration: 3000
        }).present();
      }    
      else{
        this.toast.create({
          message: `No se encontro la autentificación`,
          duration: 3000
        }).present();
      }
    });
  }

}
