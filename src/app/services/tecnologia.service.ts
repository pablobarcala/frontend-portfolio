import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  apiUrl: string = "https://vps-3631176-x.dattaweb.com:8443"

  constructor(private http: HttpClient) { }

  getTecnologias() {
    return this.http.get(this.apiUrl + "/tecnologia/traer/1")
  }
}
