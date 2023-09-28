import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  saludo: string = ""
  personas: Persona[] = []
  
  constructor(private personaService: PersonaService){
    personaService.getSaludo().subscribe((resp: any) => this.saludo = resp.mensaje)
    personaService.getPersonas().subscribe((resp: any) => this.personas = resp)
  }
}
