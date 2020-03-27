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
    const username = 'admin';
    const password = 'pankublesikai';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Application[]>(`${this.apiPath}/applications`, {headers});
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
