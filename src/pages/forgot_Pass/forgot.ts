import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AngularFireAuthModule } from 'angularfire2/auth';
//Models
import { User } from "../../models/Users/user";

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  user = {} as User;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }

  sendPassword(){
    try {
      this.afAuth.auth.sendPasswordResetEmail("wlbsstf@ldebaat9jp8x3xd6.ga");
    } catch (e) {
      console.log(e)
    }

  }

}
