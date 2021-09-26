import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Clima } from '../models/clima';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllClimaData() {
    // return this.products;
    console.log('entro a all');

    //console.log(this.http.get<Clima[]>(`${environment.url_api}/Clima/`));
     return this.http.get<Clima[]>(`${environment.url_api}/Clima/`);
  }

  getClimaData(id: string){
    // return this.products.find(item => id === item.id); // busca en el arrray products el que coincida con el parametro Id que entra
     return this.http.get<Clima>(`${environment.url_api}/Clima/${id}`);
  }

  createClimaData(clima: Clima){
      return this.http.post(`${environment.url_api}/Clima/`, clima);
  }

  updateClimaData(id: string, changes: Clima){ // Partial<Product>
    return this.http.put(`${environment.url_api}/Clima/${id}`, changes);
  }

  deleteClimaData(id: string){
    return this.http.delete(`${environment.url_api}/Clima/${id}`);
  }

}
