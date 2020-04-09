import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ApplicationsListComponent} from './applications-list/applications-list.component';
import {ApplicationComponent} from './application/application.component';
import {ApplicationsListPageComponent} from './applications-list-page/applications-list-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApplicationPageComponent} from './application-page/application-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {SuccessRegistrationPageComponent} from './success-registration-page/success-registration-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {TextareaAutosizeModule} from 'ngx-textarea-autosize';
import {LogoutPageComponent} from './logout-page/logout-page.component';
import {HttpInterceptorService} from './services/http-interceptor.service';
import {NgTempusdominusBootstrapModule} from 'ngx-tempusdominus-bootstrap';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ApplicationsListComponent,
    ApplicationComponent,
    ApplicationsListPageComponent,
    NotFoundComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    ApplicationPageComponent,
    AboutPageComponent,
    SuccessRegistrationPageComponent,
    LoginPageComponent,
    LogoutPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TextareaAutosizeModule,
    HttpClientModule,
    FormsModule,
    NgTempusdominusBootstrapModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
