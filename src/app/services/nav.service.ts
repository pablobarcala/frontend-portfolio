import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  navOpcion: BehaviorSubject<string> = new BehaviorSubject<string>("Inicio");
  transicion: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  navegar(opcion: string) {
    this.navOpcion.next(opcion);
    this.transicion.next(true);
    setTimeout(() => {
      this.transicion.next(false)
    }, 1000);
  }

  getNavOpcion() {
    return this.navOpcion.asObservable()
  }

  getTransicion() {
    return this.transicion.asObservable()
  }
}
