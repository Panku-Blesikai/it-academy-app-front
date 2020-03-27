import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Admin} from '../shared/admin';
import {map} from 'rxjs/operators';


export class User {
  constructor(
    public status: string,
  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  public username: string;
  public password: string;

  constructor(private httpClient: HttpClient) { }

  authenticationService(username: string, password: string) {
    return this.httpClient.get(`https://it-academy-app-back.herokuapp.com/validateLogin`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username, password);
    }));
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let Лuser = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) { return false; }
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) { return ''; }
    return user;
  }
}
