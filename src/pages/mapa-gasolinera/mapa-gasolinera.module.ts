import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaGasolineraPage } from './mapa-gasolinera';

@NgModule({
  declarations: [
    MapaGasolineraPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaGasolineraPage),
  ],
})
export class MapaGasolineraPageModule {}
