import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../../models/profile/profile';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


@Component({
  selector: "popover",
  templateUrl: "popover.html"
})
export class PopoverComponent {
  items: any;
  Gasolineras: Observable<any[]>;
  constructor(
    public viewCtrl: ViewController,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase
  ) {
    this.Gasolineras = afDB.list("Gasolinera").valueChanges();
    this.items = [
      { item: "Test 1" },
      { item: "Test 2" },
      { item: "Test 3" }
    ];
  }

  itemClick(item){
    this.viewCtrl.dismiss(item);
  }
}
