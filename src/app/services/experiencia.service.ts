import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  apiUrl: string = "https://vps-3631176-x.dattaweb.com:8443"

  constructor(private http: HttpClient) { }

  getExperiencias() {
    return this.http.get(this.apiUrl + "/experiencia/traer/1")
  }
}
