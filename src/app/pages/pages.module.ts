import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    PeliculaComponent,
    BuscarComponent,
    PeliculaListComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
