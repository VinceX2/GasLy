import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController} from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GasIndividualPage } from '../pages/gas-individual/gas-individual';
import { LoginPage } from "../pages/login/login";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MapaGasolineraPage} from '../pages/mapa-gasolinera/mapa-gasolinera';

//plug ins
import { Geolocation } from '@ionic-native/geolocation';

//mapa
import {AgmCoreModule} from '@agm/core';

//FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase} from "angularfire2/database-deprecated";
import { AngularFireAuthModule } from 'angularfire2/auth';
import {firebaseConfig} from '../environments/environment';
import { EstacionPage } from '../pages/estacion/estacion';
import { UbicacionProvider } from '../providers/ubicacion/ubicacion';
import { PopoverComponent } from '../components/popover/popover';

@NgModule({
  declarations: [MyApp, HomePage, ListPage, GasIndividualPage, LoginPage,EstacionPage,MapaGasolineraPage,PopoverComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbixq8dIifab53x1pfNpyuVh0LfgQMAmI'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, GasIndividualPage, LoginPage,EstacionPage,MapaGasolineraPage,PopoverComponent],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UbicacionProvider,
    Geolocation
  ]
})
export class AppModule {}
