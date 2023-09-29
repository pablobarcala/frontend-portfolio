import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

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
