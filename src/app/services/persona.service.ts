import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiUrl: string = "https://vps-3631176-x.dattaweb.com:8443"

  constructor(private http: HttpClient) { }

  getSaludo() {
    return this.http.get(this.apiUrl + "/saludo/getSaludo")
  }

  getPersonas() {
    return this.http.get(this.apiUrl + "/personas/traer")
  }
}
