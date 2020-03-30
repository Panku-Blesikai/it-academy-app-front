import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Application} from '../shared/application';
import {ApplicationService} from '../services/application.service';
import {LoaderService} from '../services/loader.service';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-applications-list-page',
  templateUrl: './applications-list-page.component.html',
  styleUrls: ['./applications-list-page.component.scss']
})
export class ApplicationsListPageComponent implements OnInit, AfterViewInit {
  public applications$: Observable<Application[]>;
  constructor(private applicationService: ApplicationService, private loaderService: LoaderService,
              public  authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.applications$ = this.applicationService.getApplications();
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngAfterViewInit() {
    this.applications$.subscribe(
      (response) => { this.hideLoader(); },
      (err) => {},
      () => {}
    );
  }

  hideLoader() {
    this.loaderService.hideLoader();
  }

  showIfUserLoggedIn() {
    this.authenticationService.isUserLoggedIn();
    console.log( this.authenticationService.isUserLoggedIn());
  }
}
