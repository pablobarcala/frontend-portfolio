import { Component } from '@angular/core';
import { Tecnologia } from 'src/app/interfaces/Tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent {
  tecnologias: Tecnologia[] = []

  constructor(
    private tecnologiaService: TecnologiaService
  ){
    tecnologiaService.getTecnologias().subscribe((resp: any) => this.tecnologias = resp)
  }
}
