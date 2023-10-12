import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './modules/routing/routing.module';
import { AdminModule } from './modules/admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { EducacionesComponent } from './components/educaciones/educaciones.component';
import { EducacionItemComponent } from './components/educacion-item/educacion-item.component';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { OpcionItemComponent } from './components/opcion-item/opcion-item.component';
import { PersonaComponent } from './components/persona/persona.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { TecnologiaItemComponent } from './components/tecnologia-item/tecnologia-item.component';
import { PersonaInicioComponent } from './components/persona-inicio/persona-inicio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoItemComponent } from './components/proyecto-item/proyecto-item.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ExperienciaItemComponent } from './components/experiencia-item/experiencia-item.component';
import { ContactoItemComponent } from './components/contacto-item/contacto-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EducacionesComponent,
    EducacionItemComponent,
    OpcionesComponent,
    OpcionItemComponent,
    PersonaComponent,
    TecnologiasComponent,
    TecnologiaItemComponent,
    PersonaInicioComponent,
    ProyectosComponent,
    ProyectoItemComponent,
    ExperienciasComponent,
    ExperienciaItemComponent,
    ContactoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
