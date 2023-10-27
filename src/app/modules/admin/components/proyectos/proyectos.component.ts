import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmacionComponent } from 'src/app/components/confirmacion/confirmacion.component';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: Proyecto[] = []

  constructor(
    private proyectoService: ProyectoService,
    private dialog: MatDialog,
    private router: Router
  ){
    proyectoService.getProyectos().subscribe((resp: any) => this.proyectos = resp)
  }

  delete(id: number){
    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      data: {elemento: "Proyecto"}
    })

    dialogRef.afterClosed().subscribe((response: any) => {
      if(response) {
        this.proyectoService.deleteProyecto(id).subscribe(resp => {
          if(resp) {
            alert("El proyecto se eliminó correctamente")
            this.router.navigate(['/admin/panel'])
            .then(() => window.location.reload());
          } else {
            alert("Hubo un error")
          }
        })
      }
    })
  }
}
