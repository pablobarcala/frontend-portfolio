import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiUrl: string = "https://vps-3631176-x.dattaweb.com:8443/personas"

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get(this.apiUrl + "/traer")
  }

  editPersona(id: number, persona: Persona){
    return this.http.put(this.apiUrl + `/editar/${id}`, persona)
  }
}
