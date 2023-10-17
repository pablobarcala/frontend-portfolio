import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private experienciaService: ExperienciaService,
    private router: Router
  ){
    this.form = formBuilder.group({
      nombre_empresa: ['', Validators.required],
      puesto: ['', Validators.required],
      link: [''],
      descripcion: [''],
      trabajo_actual: [false, Validators.required],
      fecha_inicio: [Date],
      fecha_fin: [Date]
    })
  }

  addExperiencia(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      this.experienciaService.addExperiencia(this.form.value).subscribe((resp: any) => {
        if(resp){
          alert("Se creó correctamente")
          this.router.navigate(['/admin/panel/experiencia'])
          .then(() => window.location.reload())
        } else {
          alert("Hubo algún error")
        }
      })
    } else {
      this.form.markAllAsTouched()
    }
  }
}
