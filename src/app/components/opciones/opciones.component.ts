import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { NavService } from 'src/app/services/nav.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent {
  opciones: string[] = ["Inicio", "Proyectos", "Experiencia", "Tecnologías", "Educacion", "Contacto"];
  persona: Persona | null = null

  constructor(
    private navService: NavService,
    private personaService: PersonaService
  ){
    personaService.getPersonas().subscribe((resp: any) => {
      let personas: Persona[] = resp

      personas.find((p: any) => {
        if(p.id == 1){
          this.persona = p
        }
      })
    })
  }

  closeMenu(){
    this.navService.toggleMenu()
  }
}
