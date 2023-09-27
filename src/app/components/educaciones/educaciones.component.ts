import { Component } from '@angular/core';
import { Educacion } from 'src/app/interfaces/Educacion';
import { Educaciones } from 'src/app/interfaces/mock-educaciones';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent {
  educaciones: Educacion[] = Educaciones
}
