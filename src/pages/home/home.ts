import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { JoinPage } from '../join/join';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') uname: { value: string; };
  @ViewChild('password') password: { value: string; };

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  login() {
    this.navCtrl.push(LoginPage);

  }

  join() {
    this.navCtrl.push(JoinPage);
  }

}



