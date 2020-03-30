import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Application} from '../shared/application';
import {ActivatedRoute} from '@angular/router';
import {ApplicationService} from '../services/application.service';
import {switchMap} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';
import {LoaderService} from '../services/loader.service';

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.css']
})
export class ApplicationPageComponent implements OnInit, AfterViewInit {

  constructor(private loginService: AuthenticationService, private route: ActivatedRoute, private applicationService: ApplicationService, private loaderService: LoaderService) {
    this.ngOnInit();
    this.application$.subscribe(value => (this.applicationWithNewStatus = value));
  }
  public application$: Observable<Application>;
  private serverErrorMessage: any;
  private applicationWithNewStatus: Application;

  ngOnInit(): void {
    this.application$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.applicationService.getApplication(params.get('idHash'));
      })
    );
  }
  changeStatus(status: string) {
    this.applicationWithNewStatus.status = status;
    this.applicationService.changeApplicationStatus(this.applicationWithNewStatus).subscribe(
      () => {
        this.serverErrorMessage = '';
      },
      error => (this.serverErrorMessage = error),
      () => location.reload()
    );
  }

  ngAfterViewInit() {
    this.application$.subscribe(
      (response) => { this.hideLoader(); },
      (err) => {},
      () => {}
    );
  }

  hideLoader() {
    this.loaderService.hideLoader();
  }
}
