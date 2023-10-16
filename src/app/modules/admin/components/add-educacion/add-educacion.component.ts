import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private educacionService: EducacionService,
    private router: Router
  ){
    this.form = formBuilder.group({
      nombreInstituto: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: [''],
      en_progreso: [false, Validators.required],
      fecha_inicio: [Date, Validators.required],
      fecha_fin: [Date]
    })
  }

  addEducacion(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      this.educacionService.addEducacion(this.form.value).subscribe((resp: any) => {
        if(resp){
          alert("Se creó correctamente")
          this.router.navigate(['/admin/panel/educacion'])
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
