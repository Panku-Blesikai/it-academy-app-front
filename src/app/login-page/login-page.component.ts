import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  // successMessage: string;
  invalidLogin = false;
  loginSuccess = false;


  constructor(private route: ActivatedRoute, private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe(() => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      // this.successMessage = 'Login Successful.';
      // console.log(this.successMessage);
      this.router.navigate(['/admin']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
      // console.log(this.errorMessage);
    });
  }
}
