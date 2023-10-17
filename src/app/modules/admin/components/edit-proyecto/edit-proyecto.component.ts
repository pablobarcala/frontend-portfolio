import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  id: number = 0
  form: FormGroup
  proyecto: Proyecto | undefined = undefined

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private proyectoService: ProyectoService,
    private router: Router
  ) {
    route.params.subscribe(params => {
      this.id = params['id'];
      this.filtrar(this.id)
    })
    this.form = formBuilder.group({
      nombreProyecto: ['', Validators.required],
      descripcion: [''],
      link: [''],
      github: [''],
      fecha: [Date]
    })
  }

  filtrar(id: number){
    this.proyectoService.getProyectos().subscribe((resp: any) => {
      let proyectos: Proyecto[] = resp

      this.proyecto = proyectos.find(p => p.id == id)
      this.actualizarForm()
    })
  }

  actualizarForm(){
    if(this.proyecto){
      this.form.patchValue({
        nombreProyecto: this.proyecto.nombreProyecto,
        descripcion: this.proyecto.descripcion,
        link: this.proyecto.link,
        github: this.proyecto.github,
        fecha: this.proyecto.fecha
      })
    }
  }

  editarProyecto(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      if(this.proyecto){
        this.proyectoService.editProyecto(this.proyecto.id, this.form.value).subscribe((resp: any) => {
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
