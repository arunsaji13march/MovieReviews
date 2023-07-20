import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { CategoryViewComponent } from './category-view/category-view.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'movieDetail/:movieId',component:MovieDetailComponent},
  {path:'home' ,component:HomeComponent},
  {path:'addReview/:movieId' ,component:AddReviewComponent},
  {path:'categoryView/:category',component: CategoryViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 
 }
