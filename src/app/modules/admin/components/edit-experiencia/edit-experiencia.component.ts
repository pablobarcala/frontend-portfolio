import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent {
  id: number = 0
  form: FormGroup
  experiencia: Experiencia | undefined = undefined

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private experienciaService: ExperienciaService,
    private router: Router
  ){
    route.params.subscribe(params => {
      this.id = params['id'];
      this.filtrar(this.id)
    })
    this.form = formBuilder.group({
      nombre_empresa: ['', Validators.required],
      puesto: ['', Validators.required],
      descripcion: [''],
      trabajo_actual: [false],
      fecha_inicio: [''],
      fecha_fin: ['']
    })
  }

  filtrar(id: number){
    this.experienciaService.getExperiencias().subscribe((resp: any) => {
      let experiencias: Experiencia[] = resp

      this.experiencia = experiencias.find(e => e.id == id)
      this.actualizarForm()
    })
  }

  actualizarForm(){
    if(this.experiencia){
      this.form.patchValue({
        nombre_empresa: this.experiencia.nombre_empresa,
        puesto: this.experiencia.puesto,
        descripcion: this.experiencia.descripcion,
        trabajo_actual: this.experiencia.trabajo_actual,
        fecha_inicio: this.experiencia.fecha_inicio,
        fecha_fin: this.experiencia.fecha_fin
      })
    }
  }

  editExperiencia(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      if(this.experiencia){
        this.experienciaService.editExperiencia(this.experiencia.id, this.form.value).subscribe((resp: any) => {
          if(resp){
            alert("Se editó correctamente")
            this.router.navigate(['/admin/panel/proyectos'])
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
