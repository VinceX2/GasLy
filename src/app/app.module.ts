import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GasIndividualPage } from '../pages/gas-individual/gas-individual';
import { SendMessageService } from '../services/messagelist/messagelist.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyC0g71ydfH27pTtMn_mPZMwRJi3vhGjlnM",
  authDomain: "gasly-app-bfc20.firebaseapp.com",
  databaseURL: "https://gasly-app-bfc20.firebaseio.com",
  projectId: "gasly-app-bfc20",
  storageBucket: "gasly-app-bfc20.appspot.com",
  messagingSenderId: "612381879105"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GasIndividualPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GasIndividualPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    SendMessageService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
