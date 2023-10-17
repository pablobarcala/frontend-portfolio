import { Component } from '@angular/core';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent {
  educaciones: Educacion[] = []

  constructor(
    private educacionService: EducacionService
  ){
    educacionService.getEducacion().subscribe((resp: any) => this.educaciones = resp)
  }
}
