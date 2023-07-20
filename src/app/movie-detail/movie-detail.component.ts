import { Component,OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '../Model/Movies';
import { ReviewService } from '../service/review.service';
import { Review } from '../Model/Review';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{
  movies:any;  
  movieId:string="64b0ea20946c742f2749eecd";
  userId:any;
  reviews:any;
  averageRating:any;
  showReviewForm: any;


  animal!: string;
  name!: string;

  constructor(private movieService:MovieService, private router:ActivatedRoute, private router1:Router,private reviewService:ReviewService){
    
    
  
  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.movieId = params['movieId'];
      console.log(this.movieId)});
    this.movieService.getMovieById(this.movieId).subscribe(
      (result: Movies) => {
        this.movies = result;
        console.log(this.movies)
      },
      (error) => {
        console.error('Error occurred while getting book by ID:', error);
      }
    );

    this.getReviewsByMovieId(this.movieId);
    

    }

    getReviewsByMovieId(movieId:string){
      this.reviewService.getReviewsByMovieId(movieId).subscribe(
        (reviews:Review[])=>{
          this.reviews=reviews;
          console.log(this.reviews);
          this.avgRating(); 
        },
        (error:any)=>{
          console.error('Error Fetching reviews ',error);
        }
        
      )
    }

    avgRating(){
      // Extract ratings from the list of reviews
      if(this.reviews.length!=0){
        const ratings = this.reviews.map((review: { rating: any; }) => review.rating);

      // Calculate the average rating
      const totalRating = ratings.reduce((sum: any, rating: any) => sum + rating, 0);
      const averageRating = totalRating / ratings.length;
      this.averageRating=averageRating; 
      console.log('Average Rating:', averageRating);
      }
      else{
        this.averageRating=0;
      }
    }


    goToAddRating(){
      this.router1.navigate(['../addReview',this.movieId]);
    }


   



   
  
}
