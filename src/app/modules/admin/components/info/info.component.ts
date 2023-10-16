import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  persona: Persona | undefined = undefined;

  constructor(
    private personaService: PersonaService
  ){
    personaService.getPersonas().subscribe((persona: any) => {
      persona.find((persona: any) => {
        persona.id == 1 ? this.persona = persona : undefined
      })
    });
  }
}
