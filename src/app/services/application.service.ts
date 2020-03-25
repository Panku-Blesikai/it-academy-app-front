import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Application} from '../shared/application';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private readonly apiPath = '/api';
  authenticated = false;

  constructor(private httpClient: HttpClient) {
  }

  getApplications(): Observable<Application[]> {
    return this.httpClient.get<Application[]>(`${this.apiPath}/applications`);
  }

  getApplication(id: string): Observable<Application> {
    return this.httpClient.get<Application>(`${this.apiPath}/applications/${id}`);
  }

  addApplication(application: Application): Observable<Application> {
    return this.httpClient
      .post<Application>(`${this.apiPath}/applications`, application)
      .pipe(catchError(this.errorHandler));
  }

  changeApplicationStatus(application: Application): Observable<Application> {
    return this.httpClient
      .put<Application>(`${this.apiPath}/applications`, application)
      .pipe(catchError(this.errorHandler));
  }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.httpClient.get('user', {headers}).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  // errorHandler() {
  //   return throwError(
  //     'Sorry, our services does not work right now, please try that later'
  //   );
  // }
}
