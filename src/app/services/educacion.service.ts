import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  apiUrl: string = "https://vps-3631176-x.dattaweb.com:8443"

  constructor(private http: HttpClient) {}

  getEducacion() {
    return this.http.get(this.apiUrl +'/educacion/traer/1')
  }
}
