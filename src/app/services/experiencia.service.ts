import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../interfaces/Experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  apiUrl: string = environment.apiUrl + "/experiencia"

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

  deleteExperiencia(id: number) {
    return this.http.delete(this.apiUrl + `/delete/${id}`)
  }
}
