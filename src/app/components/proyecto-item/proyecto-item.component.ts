import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { Proyectos } from 'src/app/interfaces/mock-proyecto';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent {
  @Input() proyecto: Proyecto = Proyectos[0]
}
