import { Component } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
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
  
  constructor(
    private themeService: ThemeService,
    private navService: NavService
  ){
    navService.getNavOpcion().subscribe(resp => this.navOpcion = resp)
    navService.getTransicion().subscribe(resp => this.enTransicion = resp)
    themeService.getTheme().subscribe(resp => this.theme = resp)
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