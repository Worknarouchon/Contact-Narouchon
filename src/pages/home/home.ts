import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NumtreePage} from '../numtree/numtree'
import { NumtwoPage} from '../numtwo/numtwo';


@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController) {

  }

  goToNumtree(){
    this.navCtrl.push(NumtreePage);
  }

  goToNumtwo(){
    this.navCtrl.push(NumtwoPage);
  }
  
  
}
