import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }

  helloWorldUrl = '/api';

  getHelloWorld() {
    // Added responseType: text, because for demo purpose I am just sending plain "Hello, World" text from the backend
    return this.http.get(this.helloWorldUrl, { responseType: 'text' });
  }
}
