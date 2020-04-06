import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Application} from '../shared/application';
import {ActivatedRoute} from '@angular/router';
import {ApplicationService} from '../services/application.service';
import {switchMap} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';
import {LoaderService} from '../services/loader.service';
import { Comment } from '../shared/comment';

enum StatusType {
  PERZIURIMA = 'PERŽIŪRIMA',
  ATMESTA = 'ATMESTA',
  PATVIRTINTA = 'PATVIRTINTA'
}

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.scss']
})

export class ApplicationPageComponent implements OnInit, AfterViewInit {

  constructor(public authenticationService: AuthenticationService,
              private route: ActivatedRoute, private applicationService: ApplicationService,
              private loaderService: LoaderService) {
    this.ngOnInit();
    this.application$.subscribe(value => (this.applicationWithNewStatus = value));
    this.application$.subscribe(value => (this.applicationWithNewComment = value));
  }
  public application$: Observable<Application>;
  private serverErrorMessage: any;
  private applicationWithNewStatus: Application;
  private applicationWithNewComment: Application;
  statusType = StatusType;

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

  addComment(input: string) {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const hours = today.getHours();
    const mins = today.getMinutes();
    const secs = today.getSeconds();
    const date = yyyy + '-' + mm + '-' + dd + ' ' + hours + ':' + mins + ':' + secs;
    const comment = new Comment(this.authenticationService.username, input, date);
    if (!this.applicationWithNewComment.comments) {
      this.applicationWithNewComment.comments = new Array<Comment>();
    }
    this.applicationWithNewComment.comments.push(comment);
    this.applicationService.addComment(this.applicationWithNewComment).subscribe(
      () => {
        this.serverErrorMessage = '';
      },
      error => (this.serverErrorMessage = error),
      () => location.reload()
    );
  }



  ngAfterViewInit() {
    this.application$.subscribe(
      (response) => { this.loaderService.hideLoader(); },
      (err) => {},
      () => {}
    );
  }

  showLoader() {
    this.loaderService.showLoader();
  }

}
