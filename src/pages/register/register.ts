import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ToastOptions,AlertController } from 'ionic-angular';
import { User } from '../../models/Users/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { Profile } from '../../models/profile/profile';
import { AngularFireDatabase } from 'angularfire2/database';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';


@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  user = {} as User;
  toastOptions: ToastOptions;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private afDatabase: AngularFireDatabase,
    public alert: AlertController
  ) {}

  async register(user: User) {
    try {
      this.afAuth.auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
          this.navCtrl.setRoot(HomePage);
        })
        .catch(error => {
          switch (error.code) {
            case "auth/invalid-email":
              this.showAlert("Oops", "Formato de correo electrónico invalido");
              break;
            case "auth/weak-password":
              this.showAlert("Oops","Contraseña debil, minimo de 6 caracteres");
              break;
            case "auth/email-already-in-use":
              this.showAlert("Oops", "Correo electrónico en uso");
              break;
            default:
              this.showAlert("Oops", "Tenemos un problema");
              break;
          }
        });
    } catch (e) {
      this.showAlert(
        "Oops",
        "Tenemos un problema, llenar todos los campos requeridos"
      );
      /*this.toastOptions = { message: `Oops, tenemos un problema`, duration: 3000 };
      this.toast.create(this.toastOptions).present();*/
    }
  }
  showAlert(title: string, subtitle: string) {
    let alert = this.alert.create({
      title: title,
      subTitle: subtitle,
      buttons: ["OK"]
    });
    alert.present();
  }
}


/*
const rUser = this.afAuth.authState.take(1).subscribe(auth => {
        this.afDatabase.list('User/${auth.uid}').push(this.user)
      })*/