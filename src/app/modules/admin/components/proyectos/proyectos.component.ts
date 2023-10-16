import { Component } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: Proyecto[] = []

  constructor(
    private proyectoService: ProyectoService
  ){
    proyectoService.getProyectos().subscribe((resp: any) => this.proyectos = resp)
  }
}
