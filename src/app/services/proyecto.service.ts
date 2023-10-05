import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  apiUrl: string = "https://vps-3631176-x.dattaweb.com:8443"

  constructor(private http: HttpClient) { }

  getProyectos() {
    return this.http.get(this.apiUrl + "/proyectos/traer/1")
  }
}
