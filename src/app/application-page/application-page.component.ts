import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Application} from '../shared/application';
import {ActivatedRoute} from '@angular/router';
import {ApplicationService} from '../services/application.service';
import {switchMap} from 'rxjs/operators';
import set = Reflect.set;
import {RegisterFormComponent} from '../register-form/register-form.component';

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.css']
})
export class ApplicationPageComponent implements OnInit {
  public application$: Observable<Application>;
  private serverErrorMessage: any;
  public applicationWithNewStatus: Application;

  constructor(private route: ActivatedRoute, private applicationService: ApplicationService) { }


  ngOnInit(): void {
    this.application$ = from(this.route.paramMap).pipe(
      switchMap(params => {
        return this.applicationService.getApplication({id: params.get('id')});
      })
    );
  }

  changeStatus(status) {
    this.applicationWithNewStatus  = RegisterFormComponent.apply(this.application$);
    this.applicationWithNewStatus.status = status;
    this.applicationService.changeApplicationStatus(this.applicationWithNewStatus).subscribe(
      () => {
        this.serverErrorMessage = '';
      },
      error => (this.serverErrorMessage = error)
    );
  }


}
