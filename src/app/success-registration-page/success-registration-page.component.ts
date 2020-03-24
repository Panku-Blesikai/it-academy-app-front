import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApplicationService} from '../services/application.service';
import {Observable} from 'rxjs';
import {Application} from '../shared/application';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-success-registration-page',
  templateUrl: './success-registration-page.component.html',
  styleUrls: ['./success-registration-page.component.css']
})
export class SuccessRegistrationPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private applicationService: ApplicationService) {
  }
  public application$: Observable<Application>;

  ngOnInit(): void {
    this.application$ = this.route.queryParams.pipe(
      switchMap(params => {
      return  this.applicationService.getApplication(params.idHash);
      })
    );
  }
}
