import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { CarteleraResponse } from 'src/app/interface/cartelera-response';

import { Share} from '@capacitor/share';
//const {Share} = Plugins;

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss'],
})
export class PeliculaComponent  implements OnInit {
  profileId: string | null |undefined;
  movie:any;
  pelicula:CarteleraResponse;
  constructor(
    private activate:ActivatedRoute, 
    private service: PeliculasService) { }

  ngOnInit() 
    {
      this.profileId = this.activate.snapshot.paramMap.get('id');
      this.service.getPelicula(this.profileId)
      .subscribe(res=>{
        this.movie = res;
        console.log(res);
      })
    }

    social(){
      /*
      Share.share({
        title: 'Te recomiendo esta pelicula...!',
        text: 'Te recomiendo esta pelicula...! se llama '+this.movie.title +' El tema de la pelicula es: '+ this.movie.overview,
        url: this.movie.page,
  
      });*/
      Share.share({
        title: 'Recomendación de película',
        text: 'Mira esta nueva pelicula, espero la disfrutes',
        url: this.movie.homepage,
        dialogTitle: 'Share with buddies',
      });

    
    }

}
