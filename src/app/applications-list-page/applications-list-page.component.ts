import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Application} from '../shared/application';
import {ApplicationService} from '../services/application.service';
import {LoaderService} from '../services/loader.service';

@Component({
  selector: 'app-applications-list-page',
  templateUrl: './applications-list-page.component.html',
  styleUrls: ['./applications-list-page.component.scss']
})
export class ApplicationsListPageComponent implements OnInit, AfterViewInit {
  public applications$: Observable<Application[]>;
  constructor(private applicationService: ApplicationService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.applications$ = this.applicationService.getApplications();

  }

  ngAfterViewInit() {
    this.applications$.subscribe(
      (response) => { this.hideLoader(); },
      (err) => {},
      () => {}
    );
  }

  hideLoader() {
    this.loaderService.hideLoader(document);
  }
}
