import { Component, OnInit } from '@angular/core';

import { Clima } from '../../../core/models/clima';
import { ClimaService } from '../../../core/services/clima.service';

@Component({
  selector: 'app-listar-datos-clima',
  templateUrl: './listar-datos-clima.component.html',
  styleUrls: ['./listar-datos-clima.component.scss']
})
export class ListarDatosClimaComponent implements OnInit {

 /* climaList : Clima [] = [

    {
      idClima :1,
      fecha : new Date('1994-07-04'),
      temperatura : 31.52,
      humedad : 0.25
    },
    {
      idClima :2,
      fecha : new Date('1998-08-24'),
      temperatura : 23.62,
      humedad : 2.1
    }

  ];*/

  climaList = [
  ];

  displayedColumns: string[] = ['idClima', 'fecha', 'temperatura', 'humedad', 'actions'];
  
  constructor(
    private climaService : ClimaService
  ) { }

  ngOnInit(): void {
    this.fetchClimaData();
  }

  fetchClimaData(){
    this.climaService.getAllClimaData()
    .subscribe(
      data=>{
        this.climaList = data;
      }
    );

  }

  deleteClimaData(id:string){

    this.climaService.deleteClimaData(id)
    .subscribe(rta=>
      {
       this.fetchClimaData();
      }
    )
  }

}
