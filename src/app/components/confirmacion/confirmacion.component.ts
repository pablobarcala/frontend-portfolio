import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent {

  constructor(
    private dialogRef: MatDialogRef<ConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  onNoClick() {
    this.dialogRef.close()
  }
}
