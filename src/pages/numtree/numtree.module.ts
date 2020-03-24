import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumtreePage } from './numtree';

@NgModule({
  declarations: [
    NumtreePage,
  ],
  imports: [
    IonicPageModule.forChild(NumtreePage),
  ],
})
export class NumtreePageModule {}
