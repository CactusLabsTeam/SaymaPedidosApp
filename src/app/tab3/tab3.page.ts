import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  // TODO Backend: Cargar nombre y usuario desde sesión activa
  operador = {
    nombreCompleto: 'Juanjo',
    usuario: 'juanjo'
  };

  formPassword = {
    actual: '',
    nueva: '',
    confirmar: ''
  };

  verActual = false;
  verNueva = false;
  verConfirmar = false;
  guardando = false;

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  async actualizarPassword() {
    if (!this.formPassword.actual || !this.formPassword.nueva || !this.formPassword.confirmar) {
      this.mostrarMensaje('Completa todos los campos de contraseña', 'warning');
      return;
    }

    if (this.formPassword.nueva !== this.formPassword.confirmar) {
      this.mostrarMensaje('La nueva contraseña y su confirmación no coinciden', 'danger');
      return;
    }

    this.guardando = true;

    // TODO Backend: Conectar endpoint para actualizar contraseña
    setTimeout(() => {
      this.guardando = false;
      this.formPassword = { actual: '', nueva: '', confirmar: '' };
      this.mostrarMensaje('Contraseña actualizada correctamente', 'success');
    }, 600);
  }

  cerrarSesion() {
    // TODO Backend: Limpiar token o sesión local aquí
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  private async mostrarMensaje(mensaje: string, color: 'success' | 'warning' | 'danger') {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2200,
      position: 'top',
      color: color
    });
    await toast.present();
  }
}