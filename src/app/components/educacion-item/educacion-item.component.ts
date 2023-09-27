import { Component, Input } from '@angular/core';
import { Educacion } from 'src/app/interfaces/Educacion';
import { Educaciones } from 'src/app/interfaces/mock-educaciones';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent {
  @Input() educacion: Educacion = Educaciones[0]
}
