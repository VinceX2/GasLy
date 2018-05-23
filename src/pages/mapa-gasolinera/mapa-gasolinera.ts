import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UbicacionProvider } from '../../providers/ubicacion/ubicacion';

/**
 * Generated class for the MapaGasolineraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa-gasolinera',
  templateUrl: 'mapa-gasolinera.html',
})
export class MapaGasolineraPage {

  lat: number = 32.5334261;
  lng: number = -116.9517133;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public _ubicacionProv: UbicacionProvider) {


                this._ubicacionProv.iniciarGeolocalizacion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaGasolineraPage');
  }

}
