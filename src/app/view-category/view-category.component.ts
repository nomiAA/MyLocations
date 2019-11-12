import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.sass']
})
export class ViewCategoryComponent implements OnInit {
  link: any = { title: "Go To Categories", routerLink: "/categories" }
  categoryName: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoryName = this.activatedRoute.snapshot.params.categoryName;
  }

}
