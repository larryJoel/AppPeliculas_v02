import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { PagesModule } from '../pages.module';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.scss'],
  
})
export class PeliculaListComponent  implements OnInit {
  peliculas: any; 
  constructor( private service: PeliculasService) {}

  ngOnInit() 
  {
    this.service.getCartelera()
      .subscribe(resp =>{
      console.log(resp);
      this.peliculas = resp.results;
    })

  }

}
