import {LoaderService} from '../services/loader.service';
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private loaderService: LoaderService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  hideLoader() {
    this.loaderService.hideLoader(document);
  }
}
