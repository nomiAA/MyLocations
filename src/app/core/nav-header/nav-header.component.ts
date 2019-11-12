import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.sass']
})
export class NavHeaderComponent implements OnInit {

  @Input() title: string
  @Input() longText: string
  @Input() link: { title: string, routerLink: string }

  constructor() { }

  ngOnInit() {
  }

}
