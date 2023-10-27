import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tecnologia } from '../interfaces/Tecnologia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  apiUrl: string = environment.apiUrl + "/tecnologia"

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

  deleteTecnologia(id: number) {
    return this.http.delete(this.apiUrl + `/delete/${id}`)
  }
}
