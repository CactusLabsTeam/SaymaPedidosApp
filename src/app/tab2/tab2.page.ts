import { Component     } from '@angular/core'  ;
import { NavController } from '@ionic/angular' ;

export interface PedidoSurtido {
  id           : number;
  cliente      : string;
  fechaSurtido : string;
  hora         : string;
  paquetes     : number;
  estatus      : 'En proceso' | 'Empacado';
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})

export class Tab2Page {

  textoBuscar = '';
  rangoSemana = '16 Nov - 22 Nov';

  pedidosSemana: PedidoSurtido[] = [
    {
      id           : 101,
      cliente      : 'Jesus Ochoa',
      fechaSurtido : 'Hoy',
      hora         : '11:40 AM',
      paquetes     : 12,
      estatus      : 'En proceso'
    },
    {
      id           : 102,
      cliente      : 'Adrea Dominguez',
      fechaSurtido : 'Hoy',
      hora         : '09:15 AM',
      paquetes     : 6,
      estatus      : 'Empacado'
    },
    {
      id           : 103,
      cliente      : 'Juan Cruz',
      fechaSurtido : 'Ayer',
      hora         : '05:30 PM',
      paquetes     : 20,
      estatus      : 'Empacado'
    },
    {
      id: 104,
      cliente      : 'Tomasa Basurto',
      fechaSurtido : 'Lun 16 Nov',
      hora         : '02:10 PM',
      paquetes     : 8,
      estatus      : 'Empacado'
    }
  ];

  constructor(private navCtrl: NavController) {}

  get pedidosFiltrados(): PedidoSurtido[] { 
    if (!this.textoBuscar.trim()) {
      return this.pedidosSemana;
    }
    const filtro = this.textoBuscar.toLowerCase().trim();
    return this.pedidosSemana.filter(p =>
      p.cliente.toLowerCase().includes(filtro) ||
      p.id.toString().includes(filtro) ||
      `comanda: ${p.id}`.includes(filtro) ||
      `comanda ${p.id}`.includes(filtro)
    );
  }

  get totalPaquetesSemana(): number {
    return this.pedidosSemana.reduce((acc, item) => acc + item.paquetes, 0);
  }

  refrescarLista(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 700);
  }

  verDetallePedido(pedido: PedidoSurtido) {
  this.navCtrl.navigateForward(`/detalle-pedido/${pedido.id}`);
}
}