import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode: boolean = true;
  private themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.darkMode ? "dark" : "light");

  constructor() { }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.themeSubject.next(this.darkMode ? "dark" : "light");

    const root = document.documentElement
    const newTheme = root.className === "dark" ? "light" : "dark"
    root.className = newTheme
  }

  getTheme() {
    return this.themeSubject.asObservable()
  }
}
