import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,ToastOptions} from 'ionic-angular';
import { User } from '../../models/Users/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile/profile';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  user = {} as User;
  toastOptions: ToastOptions
  //profile = {} as Profile
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private afDatabase: AngularFireDatabase,
              private toast: ToastController){
  }

  async register(user: User){
    try  {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,
        user.password);  
      console.log(result);  
      if (result) {
        this.navCtrl.setRoot(HomePage)
      }
    }
    catch(e){
      this.toastOptions = {      
        message: `Oops, tenemos un problema`,
        duration: 5000
      }
      this.toast.create(this.toastOptions).present();
      console.error(e);      
    }
  }
}
/*
const rUser = this.afAuth.authState.take(1).subscribe(auth => {
        this.afDatabase.list('User/${auth.uid}').push(this.user)
      })*/