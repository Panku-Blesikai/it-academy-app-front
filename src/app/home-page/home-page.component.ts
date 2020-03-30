import {Component, OnInit} from '@angular/core';
import {LoaderService} from '../services/loader.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  hideLoader() {
    this.loaderService.hideLoader(document);
  }
}
