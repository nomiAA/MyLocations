import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  title:string = "Wellcome to MyLocations project";
  link: any = {title:"Go To Categories",routerLink:"/categories"}
  constructor() { }

  ngOnInit() {
  }

}
