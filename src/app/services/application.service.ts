import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Application} from '../shared/application';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private readonly apiPath = '/api';

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

  errorHandler() {
    return throwError(
      'Sorry, our services does not work right now, please try that later'
    );
  }
}
