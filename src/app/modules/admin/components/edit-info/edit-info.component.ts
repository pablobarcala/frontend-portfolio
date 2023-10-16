import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent {
  id: number = 0;
  persona: Persona | undefined = undefined;
  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,
    private formBuilder: FormBuilder
  ){
    route.params.subscribe(params => {
      this.id = params['id'];
      this.filtrar(this.id)
    })
    this.form = formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }

  filtrar(id: number){
    this.personaService.getPersonas().subscribe((resp: any) => {
      let personas: Persona[] = resp

      this.persona = personas.find(p => p.id == id)
      this.actualizarForm()
    })
  }

  actualizarForm() {
    if(this.persona){
      this.form.patchValue({
        nombre: this.persona.nombre,
        apellido: this.persona.apellido,
        titulo: this.persona.titulo,
        descripcion: this.persona.descripcion
      })
    }
  }
}
