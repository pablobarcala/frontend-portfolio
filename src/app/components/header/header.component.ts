import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { NavService } from 'src/app/services/nav.service';
import { PersonaService } from 'src/app/services/persona.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navOpcion: string = ""
  enTransicion: boolean = true
  theme: string = 'dark'
  persona: Persona | undefined = undefined
  
  constructor(
    private themeService: ThemeService,
    private navService: NavService,
    private personaService: PersonaService
  ){
    navService.getNavOpcion().subscribe(resp => this.navOpcion = resp)
    navService.getTransicion().subscribe(resp => this.enTransicion = resp)
    themeService.getTheme().subscribe(resp => this.theme = resp)
    personaService.getPersonas().subscribe((resp: any) => {
      let personas: Persona[] = resp

      personas.find((p: any) => {
        if(p.id == 1){
          this.persona = p
        }
      })
    })
  }

  openMenu() {
    this.navService.toggleMenu()
  }

  onMouseOver() {
    const rect3 = document.getElementById("rect-3")
    rect3?.setAttribute("style", "width: 30px; transition: width 0.3s ease")
  }

  onMouseOut() {
    const rect3 = document.getElementById("rect-3")
    rect3?.setAttribute("style", "width: 20px; transition: width 0.3s ease")
  }

  toggleTheme(){
    this.themeService.toggleDarkMode()
  }
}