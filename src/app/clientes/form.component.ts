import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo = 'Crear cliente';
  private errores: string[];

  constructor(private clienteService: ClientesService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activateRoute.params.subscribe(
      params => {
        const id = params.id;
        if (id) {
          this.clienteService.getCliente(id).subscribe(
            cliente => this.cliente = cliente
          );
        }
      }
    );
  }

  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      json => {
        this.router.navigate(['/clientes']);
        swal('Nuevo Cliente', `${json.mensaje}`, 'success');
      },
      e => {
        this.errores = e.error.errors as string[];
        console.error('Codigo del error:' + e.status);
        console.error(this.errores);
      }
    );
  }

  update(): void {
    this.clienteService.update(this.cliente).subscribe(
      json => {
        this.router.navigate(['/clientes']);
        swal('Cliente Actualizado', `${json.mensaje}`, 'success');
      },
      e => {
        this.errores = e.error.errors as string[];
        console.error('Codigo del error:' + e.status);
        console.error(this.errores);
      }
    );
  }

}
