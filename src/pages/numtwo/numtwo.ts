import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NumfourPage} from '../numfour/numfour';

/**
 * Generated class for the NumtwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-numtwo',
  templateUrl: 'numtwo.html',
})
export class NumtwoPage {
  allFriends=[
    {
      id:1,
      name:"Narouchon Rodjanaburanon",
      tal:"0822925100",
      email:"narouchon@gmail.com",
      workplace:"pap advance",
      photo:"nam.jpg"
    },
    {
      id:2,
      name:"Paradee Rodjanaburanon",
      tal:"0861702074",
      email:"paradee22@gmail.com",
      workplace:"@ home ",
      photo:"mom.jpg"
    },
    {
      id:3,
      name:"Wananong Rodjanaburanon",
      tal:"0643456835",
      email:"wanonangnan@gmail.com",
      workplace:"TOYOTA",
      photo:"nan.jpg"
    },
    {
      id:4,
      name:"Patanong Rodjanaburanon",
      tal:"0871071402",
      email:"nunlovemom_happyday@hotmail.com",
      workplace:"SCG",
      photo:"nun.jpg"
    },
    {
      id:5,
      name:"Kanong Rodjanaburanon",
      tal:"0812697232",
      email:"kanong2557@gmail.com",
      workplace:"HONTA",
      photo:"dad.jpg"
    },
    {
      id:6,
      name:"Napatsawan Rattanakunuprakan",
      tal:"0965415441",
      email:"naphatsawanrkp.22@gmail.com",
      workplace:"student",
      photo:"am.jpg"
    }
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad NumtwoPage');
  }
  goToNumfour(friend_id:any){
    let friend = this.allFriends.find(({id})=> id===friend_id)
    this.navCtrl.push(NumfourPage,friend);}
}
