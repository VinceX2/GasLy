//Ionic
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,ToastOptions, MenuController} from 'ionic-angular';
//Models
import { User } from "../../models/Users/user";
//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  splash = true;
  user = {} as User;
  toastOptions: ToastOptions;

  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    public navParams: NavParams,
    private toast: ToastController,
    private menu: MenuController
  ) {
    this.menu.enable(false);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    setTimeout(() => this.splash = false, 4000);
  }
  /*signInWithFacebook() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res =>{
          console.log(res);
        });
    }*/

  login() {
    try {
      this.afAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      this.navCtrl.setRoot(HomePage);
    } catch (e) {
      this.toastOptions = {
        message: `Usuario no registrado`,
        duration: 3000
      };
      this.toast.create(this.toastOptions).present();
      console.error(e);
    }
  }
  register() {
    this.navCtrl.push("RegisterPage");
  }
  fPassword() {
    this.navCtrl.push("ForgotPage");
  }
}
