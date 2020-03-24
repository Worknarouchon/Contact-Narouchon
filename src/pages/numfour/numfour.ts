import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the NumfourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-numfour',
  templateUrl: 'numfour.html',
})
export class NumfourPage {
  id:any;
  name:String;
  email:String;
  tal:string;
  workplace:string;
  photo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id=this.navParams.get('id');
    this.name=this.navParams.get('name');
    this.email=this.navParams.get('email');
    this.tal=this.navParams.get('tal');
    this.workplace=this.navParams.get('workplace');
    this.photo=this.navParams.get('photo');
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumfourPage');
  }

}
