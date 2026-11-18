import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  abriendoCamara = false;

  constructor(private navCtrl: NavController) {}

  iniciarEscaneo() {
    this.abriendoCamara = true;

    setTimeout(() => {
      this.abriendoCamara = false;
      const comandaEscaneadaId = '101';
      this.navCtrl.navigateForward(`/detalle-pedido/${comandaEscaneadaId}`);
    }, 600);
  }
}