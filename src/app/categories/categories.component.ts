import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoriesService } from '../services/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
  categories : Category[];
  currentCategory: Category;

  constructor(private service: CategoriesService) { }

  ngOnInit() {
    this.updateCategories();
  }

  updateCategories(){
    this.service.getCategories().then(categories => {this.categories = categories; });
  }

  onRemove(category: Category){
    if(confirm("Are you sure to delete this category?")) {
      this.service.removeCategory(category).then(() => {this.updateCategories();});
    }
  }

  public selectCategory(event: any, category: Category) {
    this.currentCategory = category;
  }

}
