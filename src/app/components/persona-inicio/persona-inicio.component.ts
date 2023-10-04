import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-inicio',
  templateUrl: './persona-inicio.component.html',
  styleUrls: ['./persona-inicio.component.css']
})
export class PersonaInicioComponent {
  personas: Persona[] = []

  constructor(
    private personaService: PersonaService
  ){
    personaService.getPersonas().subscribe((personas: any) => this.personas = personas)
  }
}
