import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

export interface ProductoComanda {
  id: number;
  codigo: string;
  paquetes: number;
  surtido: boolean;
}

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.page.html',
  styleUrls: ['./detalle-pedido.page.scss'],
  standalone: false,
})
export class DetallePedidoPage implements OnInit {

  comandaId: string = '';
  cliente: string = 'Jesus ochoa';
  filtroCodigo: string = '';

  productos: ProductoComanda[] = [
    { id: 1, codigo: 'kim2blanco', paquetes: 4, surtido: true },
    { id: 2, codigo: 'kim1negro', paquetes: 3, surtido: true },
    { id: 3, codigo: 'olsur', paquetes: 2, surtido: false },
    { id: 4, codigo: 'su8792', paquetes: 3, surtido: false },
  ];

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.comandaId = this.route.snapshot.paramMap.get('id') || '101';
  }

  get productosFiltrados(): ProductoComanda[] {
    if (!this.filtroCodigo.trim()) {
      return this.productos;
    }
    const busq = this.filtroCodigo.toLowerCase();
    return this.productos.filter(p => p.codigo.toLowerCase().includes(busq));
  }

  get codigosSurtidos(): number {
    return this.productos.filter(p => p.surtido).length;
  }

  get totalPaquetesComanda(): number {
    return this.productos.reduce((acc, item) => acc + item.paquetes, 0);
  }

  get paquetesSurtidos(): number {
    return this.productos
      .filter(p => p.surtido)
      .reduce((acc, item) => acc + item.paquetes, 0);
  }

  get porcentajeAvance(): number {
    if (this.totalPaquetesComanda === 0) return 0;
    return Math.round((this.paquetesSurtidos / this.totalPaquetesComanda) * 100);
  }

  toggleSurtido(item: ProductoComanda) {
    item.surtido = !item.surtido;
  }

  regresar() {
    this.navCtrl.back();
  }

  guardarAvance() {
    console.log('Comanda actualizada:', this.comandaId, this.productos);
    this.navCtrl.back();
  }
}