import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-contacto-item',
  templateUrl: './contacto-item.component.html',
  styleUrls: ['./contacto-item.component.css']
})
export class ContactoItemComponent {
  persona: Persona | undefined = undefined;

  constructor(
    private personaService: PersonaService
  ){
    personaService.getPersonas().subscribe((resp: any) => {
      let personas: Persona[] = resp

      personas.find((p: any) => {
        if(p.idpersona == 1){
          this.persona = p
        }
      })
    })
  }
}
