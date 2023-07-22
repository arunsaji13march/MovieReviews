import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '../Model/Movies';
import { Review } from '../Model/Review';
import { MovieService } from '../service/movie.service';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent {


  currentPage = 0;
  itemsPerPage = 8;
  totalMoviesCount = 0;
  movies: any[] = [];

  movieList:Movies[];
  reviews: Review[];
  averageRating!: number;
  averageRatings: { [movieId: string]: number } = {}; // Add this property

  genre!:string;

  constructor(private movieService: MovieService,private router:Router,private reviewService:ReviewService,private activeRoute:ActivatedRoute) {
    this.movieList=[]
    this.reviews=[]
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.genre = params['category'];
      console.log('Selected category:', this.genre);
      this.loadMovies();
    });
    

  }



  loadMovies() {

   
    this.movieService.getMoviesByGenre(this.genre,this.currentPage,this.itemsPerPage)
      .subscribe((response: any) => {
        
        this.movies = response.content  ;
        console.log(response)
        this.totalMoviesCount = response.totalElements;
        console.log(this.movies)
      });
  }

  getTotalPages(): number {
    return Math.ceil(this.totalMoviesCount / this.itemsPerPage);
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadMovies();
  }


  goToMovie(movieId:string, event: Event) {
    if (!(event.target as HTMLElement).classList.contains('btn')) {
      console.log(movieId)  
      this.router.navigate(['../movieDetail',movieId]);
    
      console.log(movieId)
    }
  }



 
}
