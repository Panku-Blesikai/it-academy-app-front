import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ApplicationService} from './services/application.service';
import 'rxjs/add/operator/finally';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'panku-blesikai';
  constructor(private app: ApplicationService, private http: HttpClient, private router: Router) {
    this.app.authenticate(undefined, undefined);
  }
  logout() {
    this.http.post('logout', {}).finally(() => {
      this.app.authenticated = false;
      this.router.navigateByUrl('/login');
    }).subscribe();
  }
}
