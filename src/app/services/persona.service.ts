import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiUrl: string = "http://66.97.47.250:8080"

  constructor(private http: HttpClient) { }

  getSaludo() {
    return this.http.get(this.apiUrl + "/getSaludo")
  }
}
