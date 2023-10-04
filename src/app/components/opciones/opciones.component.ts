import { Component } from '@angular/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent {
  opciones: string[] = ["Inicio", "Proyectos", "Experiencia", "Tecnologías", "Educacion", "Contacto"];
}
