import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnologia } from 'src/app/interfaces/Tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-edit-tecnologias',
  templateUrl: './edit-tecnologias.component.html',
  styleUrls: ['./edit-tecnologias.component.css']
})
export class EditTecnologiasComponent {
  id: number = 0
  form: FormGroup
  tecnologia: Tecnologia | undefined = undefined

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private tecnologiaService: TecnologiaService,
    private router: Router
  ){
    route.params.subscribe(params => {
      this.id = params['id'];
      this.filtrar(this.id)
    })
    this.form = formBuilder.group({
      nombreTecnologia: ['', Validators.required],
      porcentaje: [0, Validators.required]
    })
  }

  filtrar(id: number){
    this.tecnologiaService.getTecnologias().subscribe((resp: any) => {
      let tecnologias: Tecnologia[] = resp

      this.tecnologia = tecnologias.find(t => t.id == id)
      this.actualizarForm()
    })
  }

  actualizarForm(){
    if(this.tecnologia){
      this.form.patchValue({
        nombreTecnologia: this.tecnologia.nombreTecnologia,
        porcentaje: this.tecnologia.porcentaje
      })
    }
  }

  editarTecnologia(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      if(this.tecnologia){
        this.tecnologiaService.editTecnologia(this.tecnologia.id, this.form.value).subscribe((resp: any) => {
          if(resp){
            alert("Se editó correctamente")
            this.router.navigate(['/admin/panel/tecnologias'])
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
