import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
})
export class BuscarComponent  implements OnInit {
  peliculas: any;
  constructor(private service:PeliculasService) { }

  ngOnInit() {}

  buscarPelicula(texto: String)
  {
    texto = texto.trim();
    if(texto.length === 0){
      return;
    }
    this.service.getTextPeliculas(texto)
    .subscribe((data: any)=>{
      console.log(data);
      this.peliculas=data.results;
      const miCampo = document.getElementById("miCampo") as HTMLInputElement;
    miCampo.value = "";
    })
  }

}
