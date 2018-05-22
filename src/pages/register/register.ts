import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,ToastOptions} from 'ionic-angular';
import { User } from '../../models/Users/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { Profile } from '../../models/profile/profile';
import { AngularFireDatabase } from 'angularfire2/database';


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
              private toast: ToastController,
              private afDatabase: AngularFireDatabase,){
  }

  async register(user: User){
    try  {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,
        user.password);  
      const firebaseUser = this.afAuth.auth.currentUser;
      console.log(result);  
      if (result) {
          firebaseUser.updateProfile({
            displayName: user.name,
            photoURL: ""
          
          }).then(function () {
          // Update successful.
        }).catch(function (error) {
          // An error happened.
        });

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