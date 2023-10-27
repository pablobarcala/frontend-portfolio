import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmacionComponent } from 'src/app/components/confirmacion/confirmacion.component';
import { Tecnologia } from 'src/app/interfaces/Tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent {
  tecnologias: Tecnologia[] = []

  constructor(
    private tecnologiaService: TecnologiaService,
    private dialog: MatDialog,
    private router: Router
  ){
    tecnologiaService.getTecnologias().subscribe((resp: any) => this.tecnologias = resp)
  }

  delete(id: number){
    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      data: {elemento: "Tecnología"}
    })

    dialogRef.afterClosed().subscribe((response: any) => {
      if(response) {
        this.tecnologiaService.deleteTecnologia(id).subscribe(resp => {
          if(resp) {
            alert("La tecnología se eliminó correctamente")
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
