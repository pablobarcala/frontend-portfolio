import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../interfaces/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  apiUrl: string = "https://vps-3631176-x.dattaweb.com:8443/experiencia"

  constructor(private http: HttpClient) { }

  getExperiencias() {
    return this.http.get(this.apiUrl + "/traer/1")
  }

  addExperiencia(experiencia: Experiencia) {
    return this.http.post(this.apiUrl + "/crear/1", experiencia)
  }

  editExperiencia(id: number, experiencia: Experiencia){
    return this.http.put(this.apiUrl + `/editar/${id}`, experiencia)
  }
}
