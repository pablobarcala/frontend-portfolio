import { Component } from '@angular/core';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = []

  constructor(
    private experienciaService: ExperienciaService
  ){
    experienciaService.getExperiencias().subscribe((resp: any) => this.experiencias = resp)
  }
}
