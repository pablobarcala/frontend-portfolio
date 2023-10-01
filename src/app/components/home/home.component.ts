import { AfterViewInit, Component } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  navOpcion: string = ''

  constructor(
    private navService: NavService
  ){
    navService.getNavOpcion().subscribe(nav => this.navOpcion = nav)
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
}
