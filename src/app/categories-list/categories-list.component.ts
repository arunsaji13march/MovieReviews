import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {
  constructor(private router:Router){

  }
  selectedCategory: string = 'All';

getBooksByCategory(category: string) {
  this.selectedCategory = category;
  // Perform additional actions for fetching books by the selected category
  this.router.navigate(["/categoryView",this.selectedCategory])
}


  getAll(){
    this.router.navigate(['/home'])

}


}