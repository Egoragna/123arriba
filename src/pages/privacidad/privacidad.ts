import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';
import { NaranjaPage } from '../naranja/naranja';

/**
 * Generated class for the PrivacidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privacidad',
  templateUrl: 'privacidad.html',
})
export class PrivacidadPage {

  registroPage: any;
  homePage: any;
  naranjaPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.registroPage = RegistroPage;
    this.homePage = HomePage;
    this.naranjaPage = NaranjaPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacidadPage');
  }

}
