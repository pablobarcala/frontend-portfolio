import { Component, Input } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-opcion-item',
  templateUrl: './opcion-item.component.html',
  styleUrls: ['./opcion-item.component.css']
})
export class OpcionItemComponent {
  @Input() opcion: string = ""

  selected: string = ''

  constructor(
    private navService: NavService
  ){
    navService.getNavOpcion().subscribe(resp => this.selected = resp)
  }

  navegar(opcion: string) {
    this.navService.navegar(opcion)
  }
}
