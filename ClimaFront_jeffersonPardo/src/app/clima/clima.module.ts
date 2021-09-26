import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClimaRoutingModule } from './clima-routing.module';
import { IndexComponent } from './components/index/index.component';
import { AgregarDatosClimaComponent } from './components/agregar-datos-clima/agregar-datos-clima.component';
import { ListarDatosClimaComponent } from './components/listar-datos-clima/listar-datos-clima.component';
import { MaterialModule } from '../material/material.module';
import { EditarDatosClimaComponent } from './components/editar-datos-clima/editar-datos-clima.component';

@NgModule({
  declarations: [IndexComponent, AgregarDatosClimaComponent, ListarDatosClimaComponent, EditarDatosClimaComponent],
  imports: [
    CommonModule,
    ClimaRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ClimaModule { }
