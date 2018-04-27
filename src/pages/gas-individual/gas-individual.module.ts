import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GasIndividualPage } from './gas-individual';

@NgModule({
  declarations: [
    GasIndividualPage,
  ],
  imports: [
    IonicPageModule.forChild(GasIndividualPage),
  ],
})
export class GasIndividualPageModule {}
