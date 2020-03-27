import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  username = 'admin';
  password = 'pankublesikai';
  invalidLogin = false;

  constructor(private router: Router,
              private loginService: AuthenticationService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginService.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['/admin']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
