import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
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

//FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase} from "angularfire2/database-deprecated";
import { AngularFireAuthModule } from 'angularfire2/auth';
import {firebaseConfig} from '../environments/environment';
import { EstacionPage } from '../pages/estacion/estacion';
import { UbicacionProvider } from '../providers/ubicacion/ubicacion';

@NgModule({
  declarations: [MyApp, HomePage, ListPage, GasIndividualPage, LoginPage,EstacionPage,MapaGasolineraPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, GasIndividualPage, LoginPage,EstacionPage,MapaGasolineraPage],
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
