import { ClientesService } from './clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  titulo = 'Listado de Clientes';

  clientes: Cliente[] = [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit() {
     this.clienteService.getClientes().subscribe(
       clientes => this.clientes = clientes
     );
  }

}
