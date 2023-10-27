import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  exports: [
    MatProgressBarModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
