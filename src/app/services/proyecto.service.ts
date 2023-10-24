import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../interfaces/Proyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  apiUrl: string = environment.apiUrl + "/proyectos"

  constructor(private http: HttpClient) { }

  getProyectos() {
    return this.http.get(this.apiUrl + "/traer/1")
  }

  addProyecto(proyecto: Proyecto) {
    return this.http.post(this.apiUrl + "/crear/1", proyecto)
  }

  editProyecto(id: number, proyecto: Proyecto){
    return this.http.put(this.apiUrl + `/editar/${id}`, proyecto)
  }
}
