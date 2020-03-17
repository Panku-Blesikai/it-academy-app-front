import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Application} from '../shared/application';
import {ApplicationService} from '../services/application.service';

@Component({
  selector: 'app-applications-list-page',
  templateUrl: './applications-list-page.component.html',
  styleUrls: ['./applications-list-page.component.scss']
})
export class ApplicationsListPageComponent implements OnInit {
  public applications$: Observable<Application[]>;
  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applications$ = this.applicationService.getPosts();
  }
}
