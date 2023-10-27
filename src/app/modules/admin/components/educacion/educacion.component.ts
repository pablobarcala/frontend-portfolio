import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmacionComponent } from 'src/app/components/confirmacion/confirmacion.component';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educaciones: Educacion[] = []

  constructor(
    private educacionService: EducacionService,
    private dialog: MatDialog,
    private router: Router
  ){
    educacionService.getEducacion().subscribe((resp: any) => this.educaciones = resp)
  }

  delete(id: number){
    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      data: {elemento: "Educacion"}
    })

    dialogRef.afterClosed().subscribe((response: any) => {
      if(response) {
        this.educacionService.deleteEducacion(id).subscribe(resp => {
          if(resp) {
            alert("La educación se eliminó correctamente")
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
