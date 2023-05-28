import { Component } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { NavController } from '@ionic/angular';
//import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  salir(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('/login');
  }
  
}
