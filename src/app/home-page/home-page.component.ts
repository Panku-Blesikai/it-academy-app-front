import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.hideLoader();
  }

  hideLoader(): void {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
  }
}
