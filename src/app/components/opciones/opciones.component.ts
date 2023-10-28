import { Component } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent {
  opciones: string[] = ["Inicio", "Proyectos", "Experiencia", "Tecnologías", "Educacion", "Contacto"];

  constructor(
    private navService: NavService
  ){}

  closeMenu(){
    this.navService.toggleMenu()
  }
}
