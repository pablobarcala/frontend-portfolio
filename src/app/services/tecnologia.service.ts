import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tecnologia } from '../interfaces/Tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  apiUrl: string = "https://vps-3631176-x.dattaweb.com:443/tecnologia"

  constructor(private http: HttpClient) { }

  getTecnologias() {
    return this.http.get(this.apiUrl + "/traer/1")
  }

  addTecnologia(tecnologia: Tecnologia) {
    return this.http.post(this.apiUrl + "/crear/1", tecnologia)
  }

  editTecnologia(id: number, tecnologia: Tecnologia){
    return this.http.put(this.apiUrl + `/editar/${id}`, tecnologia)
  }
}
