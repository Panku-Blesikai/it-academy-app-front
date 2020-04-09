import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Application} from '../shared/application';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplicationService} from '../services/application.service';
import {catchError, switchMap} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';
import {LoaderService} from '../services/loader.service';
import {Comment} from '../shared/comment';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {formatDate} from '@angular/common';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

  constructor(public authenticationService: AuthenticationService, private router: Router,
              private route: ActivatedRoute, private applicationService: ApplicationService,
              private loaderService: LoaderService, private fb: FormBuilder) {
    this.ngOnInit();
    this.application$.subscribe(value => (this.applicationWithNewStatus = value));
    this.application$.subscribe(value => (this.applicationWithNewComment = value));
    this.application$.subscribe(value => (this.applicationForPDF = value));
  }

  public application$: Observable<Application>;
  private serverErrorMessage: any;
  private applicationWithNewStatus: Application;
  private applicationWithNewComment: Application;
  private applicationForPDF: Application;
  private statusType = StatusType;
  private now = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-GB', 'GMT+3');
  private date = null;
  private interviewMessage: string;

  get comment() {
    return this.commentForm.get('comment');
  }

  get time() {
    return this.interviewForm.get('time');
  }

  commentForm = this.fb.group({
    comment: ['',
      [
        Validators.required,
        Validators.pattern(`^(?=.*\\S).+$`),
        Validators.maxLength(1024)
      ]
    ],
  });

  interviewForm = this.fb.group({
    time: ['',
      [
        Validators.maxLength(16)
      ]
    ],
  });

  onInterviewTimeSubmit() {
    const commentText = 'Kandidatui numatytas interviu laikas: ' + this.interviewForm.value.time.format('YYYY-MM-DD HH:mm');
    const comment = new Comment(sessionStorage.getItem('username'), commentText, this.now);
    this.uploadComment(comment);
  }


  onCommentSubmit() {
    const comment = new Comment(sessionStorage.getItem('username'), this.commentForm.value.comment, this.now);
    this.uploadComment(comment);
  }

  uploadComment(comment: Comment) {
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

  checkIfRegisteredForInterview(application: Application): boolean {
    if (!application.comments) {
      return false;
    }
    for (const comment of application.comments) {
      if (comment.input.includes('Kandidatui numatytas interviu laikas: ')) {
        this.interviewMessage = comment.input;
      }
    }
    return this.interviewMessage !== '';
  }

  ngOnInit(): void {
    this.interviewMessage = '';
    this.date = moment('2020-01-01T00:00');
    this.application$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.applicationService.getApplication(params.get('idHash'));
      }), catchError(() => {
          this.router.navigate(['/not-found']);
          return new Observable<Application>();
        }
      )
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

  generatePdf() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).download(this.applicationForPDF.name + '_' + this.applicationForPDF.surname + '_anketa.pdf');
  }

  getDocumentDefinition() {
    return {
      content: [
        {
          text: 'Studento anketa',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]

        },
        {
          layout: 'fixed',
          wordWrap: 'break-word',
          border: '1px solid #d1d5da',
          fontSize: 10,
          table: {
            headerRows: 0,
            widths: ['25%', '75%'],
            body: [
              [{text: 'Vardas', bold: true}, this.applicationForPDF.name],
              [{text: 'Pavardė', bold: true}, this.applicationForPDF.surname],
              [{text: 'El. paštas', bold: true}, this.applicationForPDF.email],
              [{text: 'Tel. nr.', bold: true}, this.applicationForPDF.phone],
              [{text: 'Studijuoja', bold: true}, this.applicationForPDF.education],
              [{text: 'Trišalė sutartis', bold: true}, this.applicationForPDF.threePartyAgreement],
              [{text: 'Laisvas 14:00-18:00', bold: true}, this.applicationForPDF.available14To18],
              [{text: 'Laisvalaikis', bold: true}, this.applicationForPDF.freeTimeActivity],
              [{text: 'Motyvacija', bold: true}, this.applicationForPDF.motivation],
              [{text: 'Patirtis', bold: true}, this.applicationForPDF.experience],
              [{text: 'Šaltinis', bold: true}, this.applicationForPDF.infoAboutAcademy],
              [{text: 'Pateikta', bold: true}, this.applicationForPDF.dateTime],
            ]
          }
        },
        {
          text: 'Dokumento sukūrimo data ir laikas: ' + this.now,
          fontSize: 10,
          alignment: 'left',
          margin: [0, 0, 0, 20]
        }]
    };
  }

  ngAfterViewInit() {
    this.application$.subscribe(
      (response) => {
        this.loaderService.hideLoader();
      },
      () => {
      },
      () => {
      }
    );
  }

  showLoader() {
    this.loaderService.showLoader();
  }

}
