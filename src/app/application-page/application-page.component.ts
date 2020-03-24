import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Application} from '../shared/application';
import {ActivatedRoute} from '@angular/router';
import {ApplicationService} from '../services/application.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.css']
})
export class ApplicationPageComponent implements OnInit {
  public application$: Observable<Application>;

  constructor(private route: ActivatedRoute, private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.application$ = from(this.route.paramMap).pipe(
      switchMap(params => {
        return this.applicationService.getApplication({id: params.get('idHash')});
      })
    );
  }

}
