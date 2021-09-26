import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ListarDatosClimaComponent } from '../listar-datos-clima/listar-datos-clima.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @ViewChild(ListarDatosClimaComponent) child:ListarDatosClimaComponent;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.refrescarPagina();
  }

  refrescarPagina()
  {
    console.log('entro a refrescarPagina');
    //this.router.navigate(['./clima']);
    this.child.fetchClimaData();
  }

}
