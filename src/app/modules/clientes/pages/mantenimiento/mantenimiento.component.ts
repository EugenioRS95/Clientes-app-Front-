import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {
  clientes!: Cliente[];
  cliente: Cliente = new Cliente();
  maleInput!: boolean;
  femaleInput!: boolean;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);    
  }

  registerCliente(): void {
    this.clienteService.createCliente(this.cliente).subscribe(cliente => {
      if(cliente) {
        this.updateTable();
        this.clearCliente();
      }
    });
    
  }

  updateCliente(): void{
    this.clienteService.updateCliente(this.cliente).subscribe(cliente => {
      if(cliente) {
        this.updateTable();
        this.clearCliente();
      }
    });
  }

  deleteCliente(): void{
    this.clienteService.deleteCliente(this.cliente.id).subscribe(cliente => {
      if(!cliente) {
        this.updateTable();
        this.clearCliente();
      }
    });
  }

  updateTable(): void {
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
  }
  //eventos
  eventSetCliente(cliente: Cliente): void{
    this.cliente.setCliente(cliente);
  }

  clearCliente(): void {
    this.cliente.id=0;
    this.cliente.nombres='';
    this.cliente.apellidoPaterno='';
    this.cliente.apellidoMaterno='';
    this.cliente.direccion='';
    this.cliente.email='';
    this.cliente.fechaNacimiento=new Date();
    this.cliente.sexo='';
  }
}
