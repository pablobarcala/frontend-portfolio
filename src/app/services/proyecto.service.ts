import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../interfaces/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  apiUrl: string = "https://vps-3631176-x.dattaweb.com:8443/proyectos"

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
