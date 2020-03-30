import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hideLoader(): void {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('home').style.display = 'block';
  }
}
