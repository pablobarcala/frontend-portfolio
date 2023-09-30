import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opcion-item',
  templateUrl: './opcion-item.component.html',
  styleUrls: ['./opcion-item.component.css']
})
export class OpcionItemComponent {
  @Input() opcion: string = ""
}
