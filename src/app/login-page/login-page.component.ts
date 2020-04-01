import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username = '';
  password = '';
  errorMessage: any;


  constructor(private route: ActivatedRoute, private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe(() => {
      this.router.navigate(['/admin']).then(r => {}, err => {});
    }, () => {
      (this.errorMessage = 'Invalid username or password.');
    });
  }
}

