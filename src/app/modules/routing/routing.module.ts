import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../admin/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { DashboardComponent } from '../admin/components/dashboard/dashboard.component';
import { AdminComponent } from '../admin/components/admin/admin.component';
import { InfoComponent } from '../admin/components/info/info.component';
import { EditInfoComponent } from '../admin/components/edit-info/edit-info.component';
import { ProyectosComponent } from '../admin/components/proyectos/proyectos.component';
import { EditProyectoComponent } from '../admin/components/edit-proyecto/edit-proyecto.component';
import { AddProyectoComponent } from '../admin/components/add-proyecto/add-proyecto.component';
import { ExperienciaComponent } from '../admin/components/experiencia/experiencia.component';
import { EditExperienciaComponent } from '../admin/components/edit-experiencia/edit-experiencia.component';
import { AddExperienciaComponent } from '../admin/components/add-experiencia/add-experiencia.component';
import { TecnologiasComponent } from '../admin/components/tecnologias/tecnologias.component';
import { EditTecnologiasComponent } from '../admin/components/edit-tecnologias/edit-tecnologias.component';
import { AddTecnologiasComponent } from '../admin/components/add-tecnologias/add-tecnologias.component';
import { EducacionComponent } from '../admin/components/educacion/educacion.component';
import { EditEducacionComponent } from '../admin/components/edit-educacion/edit-educacion.component';
import { AddEducacionComponent } from '../admin/components/add-educacion/add-educacion.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'panel', component: DashboardComponent, children: [
      {path: 'info', component: InfoComponent, children: [
        {path:'edit-info/:id', component: EditInfoComponent}
      ]},
      {path: 'proyectos', component: ProyectosComponent, children: [
        {path: 'edit-proyecto/:id', component: EditProyectoComponent},
        {path: 'add-proyecto', component: AddProyectoComponent}
      ]},
      {path: 'experiencia', component: ExperienciaComponent, children: [
        {path: 'edit-experiencia/:id', component: EditExperienciaComponent},
        {path: 'add-experiencia', component: AddExperienciaComponent}
      ]},
      {path: 'tecnologias', component: TecnologiasComponent, children: [
        {path: 'edit-tecnologia/:id', component: EditTecnologiasComponent},
        {path: 'add-tecnologia', component: AddTecnologiasComponent}
      ]},
      {path: 'educacion', component: EducacionComponent, children: [
        {path: 'edit-educacion/:id', component: EditEducacionComponent},
        {path: 'add-educacion', component: AddEducacionComponent}
      ]}
    ]}
  ]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
