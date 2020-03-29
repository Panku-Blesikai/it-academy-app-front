import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class JwtResponse {
  constructor(
    public jwtToken: string,
  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public username: string;

  constructor(private httpClient: HttpClient) { }

  authenticationService(username: string, password: string) {
    return this.httpClient.post<any>(`/api/authenticate`, {username, password})
      .pipe(map(
        userData => {
          sessionStorage.setItem('username', username);
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
    ));
  }

  logout() {
    sessionStorage.removeItem('username');
  }

  isUserLoggedIn() {
    return sessionStorage.getItem('username') !== null;
  }
}
