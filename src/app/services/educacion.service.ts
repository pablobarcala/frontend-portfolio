import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../interfaces/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  apiUrl: string = "https://vps-3631176-x.dattaweb.com:443/educacion"

  constructor(private http: HttpClient) {}

  getEducacion() {
    return this.http.get(this.apiUrl + '/traer/1')
  }

  addEducacion(educacion: Educacion) {
    return this.http.post(this.apiUrl + "/crear/1", educacion)
  }

  editEducacion(id: number, educacion: Educacion){
    return this.http.put(this.apiUrl + `/editar/${id}`, educacion)
  }
}
