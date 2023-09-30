import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { EducacionesComponent } from './components/educaciones/educaciones.component';
import { EducacionItemComponent } from './components/educacion-item/educacion-item.component';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { OpcionItemComponent } from './components/opcion-item/opcion-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EducacionesComponent,
    EducacionItemComponent,
    OpcionesComponent,
    OpcionItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
