import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-add-tecnologias',
  templateUrl: './add-tecnologias.component.html',
  styleUrls: ['./add-tecnologias.component.css']
})
export class AddTecnologiasComponent {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private tecnologiaService: TecnologiaService,
    private router: Router
  ) {
    this.form = formBuilder.group({
      nombreTecnologia: ['', Validators.required],
      porcentaje: [0, Validators.required]
    })
  }

  addTecnologia(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      this.tecnologiaService.addTecnologia(this.form.value).subscribe((resp: any) => {
        if(resp){
          alert("Se creó correctamente")
          this.router.navigate(['/admin/panel/tecnologias'])
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
