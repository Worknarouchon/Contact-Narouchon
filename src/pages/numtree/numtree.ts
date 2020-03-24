import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NumfivePage} from '../numfive/numfive';

/**
 * Generated class for the NumtreePage page .
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-numtree',
  templateUrl: 'numtree.html',
})
export class NumtreePage {

  allFriends=[
    {
      id:1,
      name:"ตำรวจทางหลวง",
      tal:"1193",
      photo:"1.png"
    },
    {
      id:2,
      name:"การรถไฟแห่งประเทศไทย",
      tal:"1690",
      photo:"2.png"
    },
    {
      id:3,
      name:"อุบัติเหตุทางน้ำ",
      tal:"1196",
      photo:"3.jpg"
    },
    {
      id:4,
      name:"โทรหาแพทย์ฉุกเฉิน",
      tal:"1669 ",
      photo:"4.jpg"
    },
    {
      id:5,
      name:"ศูนย์เตือนภัยพิบัติแห่งชาติ",
      tal:"192",
      photo:"5.png"
    },
    {
      id:6,
      name:"ศูนย์ปลอดภัยคมนาคม",
      tal:"1356",
      photo:"6.jpg"
    },
    {
      id:7,
      name:"บขส.",
      tal:"1490",
      photo:"7.png"
    },
    {
      id:8,
      name:"ตำรวจท่องเที่ยว",
      tal:"1155",
      photo:"8.jpg"
    }
  ];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumtreePage');
  }
  goToNumfive(friend_id:any){
    let friend = this.allFriends.find(({id})=> id===friend_id)
    this.navCtrl.push(NumfivePage,friend);}

}
