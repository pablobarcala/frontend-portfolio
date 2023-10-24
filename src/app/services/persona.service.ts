import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/Persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiUrl: string = environment.apiUrl + "/personas"

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get(this.apiUrl + "/traer")
  }

  editPersona(id: number, persona: Persona){
    return this.http.put(this.apiUrl + `/editar/${id}`, persona)
  }
}
