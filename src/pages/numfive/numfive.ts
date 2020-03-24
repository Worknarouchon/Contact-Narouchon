import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NumfivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-numfive',
  templateUrl: 'numfive.html',
})
export class NumfivePage { 
  
  id:any;
  name:String;
  tal:string;
  photo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id=this.navParams.get('id');
    this.name=this.navParams.get('name');
    this.tal=this.navParams.get('tal');
    this.photo=this.navParams.get('photo');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NumfivePage');
  }

}
