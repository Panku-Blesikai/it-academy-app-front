import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ApplicationService} from '../services/application.service';

@Component({
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

  credentials = {username: '', password: ''};

  constructor(private app: ApplicationService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.app.authenticate(this.credentials, () => {
      this.router.navigate(['/admin']);
    });
    return false;
  }

}
