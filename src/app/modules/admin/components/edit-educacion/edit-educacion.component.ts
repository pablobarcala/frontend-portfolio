import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent {
  id: number = 0
  form: FormGroup
  educacion: Educacion | undefined = undefined

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private educacionService: EducacionService,
    private router: Router
  ){
    route.params.subscribe(params => {
      this.id = params['id'];
      this.filtrar(this.id)
    })
    this.form = formBuilder.group({
      nombreInstituto: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: [''],
      en_progreso: [false, Validators.required],
      fecha_inicio: [Date, Validators.required],
      fecha_fin: [Date]
    })
  }

  filtrar(id: number){
    this.educacionService.getEducacion().subscribe((resp: any) => {
      let educaciones: Educacion[] = resp

      this.educacion = educaciones.find(e => e.id == id)
      this.actualizarForm()
    })
  }

  actualizarForm(){
    if(this.educacion){
      this.form.patchValue({
        nombreInstituto: this.educacion.nombreInstituto,
        titulo: this.educacion.titulo,
        descripcion: this.educacion.descripcion,
        en_progreso: this.educacion.en_progreso,
        fecha_inicio: this.educacion.fecha_inicio,
        fecha_fin: this.educacion.fecha_fin
      })
    }
  }

  editEducacion(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      if(this.educacion){
        this.educacionService.editEducacion(this.educacion.id, this.form.value).subscribe((resp: any) => {
          if(resp){
            alert("Se editó correctamente")
            this.router.navigate(['/admin/panel/educacion'])
            .then(() => window.location.reload())
          } else {
            alert("Hubo algún error")
          }
        })
      }
    } else {
      this.form.markAllAsTouched()
    }
  }
}
