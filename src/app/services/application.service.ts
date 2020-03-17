import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Application} from '../shared/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private readonly apiPath = '/api';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Application[]> {
    return this.httpClient.get<Application[]>(`${this.apiPath}`);
  }

  getPost({id}): Observable<Application> {
    return this.httpClient.get<Application>(`${this.apiPath}/${id}`);
  }
}
