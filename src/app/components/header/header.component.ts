import { Component, AfterViewInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  saludo: string = ""
  personas: Persona[] = []
  
  constructor(private personaService: PersonaService){
    personaService.getSaludo().subscribe((resp: any) => this.saludo = resp.mensaje)
    personaService.getPersonas().subscribe((resp: any) => this.personas = resp)
  }

  ngAfterViewInit() {
    this.seguirCursor()
  }

  seguirCursor() {
    document.addEventListener("mousemove", (event: MouseEvent) => {
      const follower = document.getElementById("follower") as HTMLElement
      const x = event.clientX
      const y = event.clientY

      if(follower){
        follower.style.display = "block"
        follower.style.left = x + "px"
        follower.style.top = y + "px"
      }
    })
  }

  onMouseOver() {
    const rect3 = document.getElementById("rect-3")
    rect3?.setAttribute("style", "width: 30px; transition: width 0.3s ease")
  }

  onMouseOut() {
    const rect3 = document.getElementById("rect-3")
    rect3?.setAttribute("style", "width: 20px; transition: width 0.3s ease")
  }
}