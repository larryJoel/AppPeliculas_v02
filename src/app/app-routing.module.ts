import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { PeliculaListComponent } from './pages/pelicula-list/pelicula-list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate:[IngresadoGuard]
  },
  {
    path:'pelicula-list',
    component: PeliculaListComponent, canActivate:[IngresadoGuard]

  },
  
  {
    path:'buscar',
    component:BuscarComponent, canActivate:[IngresadoGuard]
  },

  {
    path:'pelicula/:id',
    component:PeliculaComponent, canActivate:[IngresadoGuard]
  },

  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'registro',
    component:RegistroComponent
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
