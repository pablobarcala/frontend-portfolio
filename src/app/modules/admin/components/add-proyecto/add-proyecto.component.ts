import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private proyectoService: ProyectoService
  ){
    this.form = formBuilder.group({
      nombreProyecto: ['', Validators.required],
      descripcion: [''],
      link: [''],
      fecha: [Date]
    })
  }

  addProyecto(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      this.proyectoService.addProyecto(this.form.value).subscribe((resp: any) => {
        if(resp){
          alert("Se creó correctamente")
          this.router.navigate(['/admin/panel/proyectos'])
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
