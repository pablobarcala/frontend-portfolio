import { Component, Input } from '@angular/core';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { Experiencias } from 'src/app/interfaces/mock-experiencia';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent {
  @Input() experiencia: Experiencia = Experiencias[0]
}
