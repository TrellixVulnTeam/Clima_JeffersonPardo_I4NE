import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { EditarDatosClimaComponent } from './components/editar-datos-clima/editar-datos-clima.component';

const routes: Routes = [
  
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'edit/:id',
    component: EditarDatosClimaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClimaRoutingModule { }
