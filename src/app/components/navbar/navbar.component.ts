import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nomeDoApp: string = 'E-commerce';
  isMenuCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
