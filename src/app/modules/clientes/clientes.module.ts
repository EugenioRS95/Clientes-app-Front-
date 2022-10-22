import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { GenderPipe } from 'src/app/pipes/gender.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantenimientoComponent,
    GenderPipe
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  providers: [ClienteService]
})
export class ClientesModule { }
