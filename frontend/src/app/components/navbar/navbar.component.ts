import { Component, OnInit } from '@angular/core';
import {
  faSquareInstagram,
  faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  fa_bars = faBars;
  fa_close = faTimes;
  faInstagram = faSquareInstagram;
  faFacebook = faSquareFacebook;

  menuActive = false;

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.menuActive = !this.menuActive;
  }
}
