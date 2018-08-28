import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items: Observable<any[]>;
  constructor(db: AngularFirestore,public navCtrl: NavController, public navParams: NavParams) {
    this.items = db.collection('items').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
