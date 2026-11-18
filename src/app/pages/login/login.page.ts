import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {

  credenciales = {
    email: '',
    password: ''
  };

  mostrarPassword = false;
  cargando = false;
  anioActual = new Date().getFullYear();

  constructor(private navCtrl: NavController) {}

  togglePassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  iniciarSesion() {
    if (!this.credenciales.email || !this.credenciales.password) {
      return;
    }

    this.cargando = true;

    setTimeout(() => {
      this.cargando = false;
      this.navCtrl.navigateRoot('/tabs/tab2', { animated: true });
    }, 600);
  }
}