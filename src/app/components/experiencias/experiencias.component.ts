import { Component } from '@angular/core';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {
  experiencias: Experiencia[] = []

  constructor(private experienciaService: ExperienciaService){
    experienciaService.getExperiencias().subscribe((resp: any) => this.experiencias = resp)
  }
}
