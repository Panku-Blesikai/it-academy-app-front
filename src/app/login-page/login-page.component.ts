import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {LoaderService} from '../services/loader.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username = 'Pankublesikai';
  password = 'blesikaikarantine';
  errorMessage: any;


  constructor(private route: ActivatedRoute, private router: Router, private loaderService: LoaderService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.loaderService.hideLoader();
  }

  checkLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe(() => {
      this.router.navigate(['/admin']);
    }, () => {
      (this.errorMessage = 'Invalid username or password.');
    });
  }

  showLoader() {
    this.loaderService.showLoader();
  }
}

