import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CarteleraResponse } from '../interface/cartelera-response';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  profileId: string | null |undefined;
  movie:any;
  constructor(
    private activate:ActivatedRoute,
    private http: HttpClient) { }

  getCartelera():Observable<CarteleraResponse>
  {
      return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=f94aa13f0bf3664d4f542fa08948a210&language=en-US&page=1');
  }

  getPelicula(id:any)
  {
    console.log(id);
      return  this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=f94aa13f0bf3664d4f542fa08948a210&language=en-US')
  }

  getTextPeliculas(texto: String)
  {
    console.log(texto);
    return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/search/movie?api_key=f94aa13f0bf3664d4f542fa08948a210&language=en-US&query='+texto+'&page=1&include_adult=false')
  }
}
