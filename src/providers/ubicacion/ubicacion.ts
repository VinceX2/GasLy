
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the UbicacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UbicacionProvider {

  constructor(private geolocation: Geolocation) {
    console.log('Hello UbicacionProvider Provider');
  }


  iniciarGeolocalizacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      console.log(resp.coords);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
