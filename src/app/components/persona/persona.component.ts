import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  personas: Persona[] = []

  constructor(
    private personaService: PersonaService
  ){
    personaService.getPersonas().subscribe((personas: any) => this.personas = personas)
  }
}
