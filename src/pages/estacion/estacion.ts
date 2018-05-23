import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapaGasolineraPage } from '../mapa-gasolinera/mapa-gasolinera';

/**
 * Generated class for the EstacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estacion',
  templateUrl: 'estacion.html',
})
export class EstacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacionPage');
  }


  goToMapa(){
    this.navCtrl.push(MapaGasolineraPage);
  }

}
