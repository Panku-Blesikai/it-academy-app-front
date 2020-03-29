import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }

}
