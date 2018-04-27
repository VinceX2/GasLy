import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GasIndividualPage} from '../gas-individual/gas-individual';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  goTogasIndividual(){
    this.navCtrl.push(GasIndividualPage);
  }

}
