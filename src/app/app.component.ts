import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  theme: string = '';

  constructor(private themeService: ThemeService){
    themeService.getTheme().subscribe(theme => this.theme = theme)

    const root = document.documentElement
    root.className = this.theme
  }
}
