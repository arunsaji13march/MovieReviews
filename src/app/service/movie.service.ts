import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Movies} from '../Model/Movies';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private httpClient:HttpClient){
  
  }

  getAllMovies():Observable<any[]>{
    return this.httpClient.get<Movies[]>("http://localhost:8085/movies/v1/getAllMovies");
  }
  getPaginatedMovies(currentPage: number, itemsPerPage: number): Observable<any> {
    const params = new HttpParams()
      .set('page', currentPage)
      .set('size', itemsPerPage)

    return this.httpClient.get<any>("http://localhost:8085/movies/v1/getAllMovies", { params });
  }

  getMovieById(movieId:string):Observable<any>{
    const params=new HttpParams()
    .set('movieId',movieId)
    return this.httpClient.get<Movies>("http://localhost:8085/movies/v1/getMovieById",{params})

  }

  // getCategoryMovies(currentPage: number, itemsPerPage: number, genre:string): Observable<any> {
  //   const params = new HttpParams()
  //     .set('page', currentPage)
  //     .set('size', itemsPerPage)
  //     .set("genre",genre)

  //     console.log(genre)
  //   return this.httpClient.get<any>("http://localhost:8085/movies/v1/genre", {params});
  // }
  getMoviesByGenre(genre: string, page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.httpClient.get<any>(`http://localhost:8085/movies/v1/genre/${genre}`, { params });
  }

  }
  

  



  

