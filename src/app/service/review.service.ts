import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../Model/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient:HttpClient) { }

  getReviewsByMovieId(movieId: string): Observable<Review[]> {
    const url = `http://localhost:8080/review/v1/reviewsByMovieId?movieId=${movieId}`;
    return this.httpClient.get<Review[]>(url);
  }
  
}
