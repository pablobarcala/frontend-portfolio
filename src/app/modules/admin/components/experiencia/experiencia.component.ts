import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmacionComponent } from 'src/app/components/confirmacion/confirmacion.component';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = []

  constructor(
    private experienciaService: ExperienciaService,
    private dialog: MatDialog,
    private router: Router
  ){
    experienciaService.getExperiencias().subscribe((resp: any) => this.experiencias = resp)
  }

  delete(id: number){
    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      data: {elemento: "Experiencia"}
    })

    dialogRef.afterClosed().subscribe((response: any) => {
      if(response) {
        this.experienciaService.deleteExperiencia(id).subscribe(resp => {
          if(resp) {
            alert("La experiencia se eliminó correctamente")
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
