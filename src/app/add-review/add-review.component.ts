import { Component } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {

  rating!: number;
  comment!: string;

  constructor() {}

  submitReview(): void {
    // Here you can access the rating and comment entered by the user
    console.log('Rating:', this.rating);
    console.log('Comment:', this.comment);

    // Add your logic to save the review to the backend or perform any other action
    // For example, you can call a service method to add the review to your database
    // this.movieService.addReview(this.movieId, this.rating, this.comment).subscribe(
    //   (response) => {
    //     // Handle the response from the server if needed
    //   },
    //   (error) => {
    //     // Handle errors if any
    //   }
    // );

    // Clear the rating and comment fields after submitting
    this.rating = 0;
    this.comment = "";
  }
}
