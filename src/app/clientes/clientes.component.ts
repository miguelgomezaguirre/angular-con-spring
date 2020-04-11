import { ClientesService } from './clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  titulo = 'Listado de Clientes';

  clientes: Cliente[] = [];

  constructor(private clienteService: ClientesService, private router: Router) { }

  ngOnInit() {
     this.clienteService.getClientes().subscribe(
       clientes => this.clientes = clientes
     );
  }

  delete(cliente: Cliente): void {
    this.clienteService.delete(cliente.id).subscribe(
      respuesta => {
        this.clientes = this.clientes.filter(cli => cli !== cliente);
        swal('Cliente Eliminado', `Cliente ${cliente.nombre} eliminado con éxito`, 'success');
      }
    );
  }

}
