import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../model/category';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.sass']
})
export class NewCategoryComponent implements OnInit {
  link: any = { title: "Go To Categories", routerLink: "/categories" }
  editCategoryForm: FormGroup;

  constructor(private service: CategoriesService, private router: Router, private formBuilder: FormBuilder) {
    this.editCategoryForm = formBuilder.group(new Category(""));
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.addCategory(this.editCategoryForm.value)
      .then(() => { this.router.navigateByUrl('/categories') })
      .catch(err => console.log(err));
  }

}
