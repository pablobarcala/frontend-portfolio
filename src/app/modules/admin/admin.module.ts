import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RoutingModule } from '../routing/routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { InfoComponent } from './components/info/info.component';
import { EditInfoComponent } from './components/edit-info/edit-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EditProyectoComponent } from './components/edit-proyecto/edit-proyecto.component';
import { AddProyectoComponent } from './components/add-proyecto/add-proyecto.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    InfoComponent,
    EditInfoComponent,
    ProyectosComponent,
    EditProyectoComponent,
    AddProyectoComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
