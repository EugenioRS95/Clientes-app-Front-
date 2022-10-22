import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: "", component: MantenimientoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            HttpClientModule],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
