import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatDialogModule,
    MatChipsModule
  ],
  exports: [
    MatProgressBarModule,
    MatDialogModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
