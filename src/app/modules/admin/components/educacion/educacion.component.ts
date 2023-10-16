import { Component } from '@angular/core';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educaciones: Educacion[] = []

  constructor(
    private educacionService: EducacionService
  ){
    educacionService.getEducacion().subscribe((resp: any) => this.educaciones = resp)
  }
}
