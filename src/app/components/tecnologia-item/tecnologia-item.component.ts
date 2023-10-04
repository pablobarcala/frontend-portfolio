import { Component, Input } from '@angular/core';
import { Tecnologia } from 'src/app/interfaces/Tecnologia';
import { Tecnologias } from 'src/app/interfaces/mock-tecnologia';

@Component({
  selector: 'app-tecnologia-item',
  templateUrl: './tecnologia-item.component.html',
  styleUrls: ['./tecnologia-item.component.css']
})
export class TecnologiaItemComponent {
  @Input() tecnologia: Tecnologia = Tecnologias[0]
}
