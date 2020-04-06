import {LoaderService} from '../services/loader.service';
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private loaderService: LoaderService, public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loaderService.showLoader();
  }

  hideLoader() {
    this.loaderService.hideLoader();
  }

  myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}
