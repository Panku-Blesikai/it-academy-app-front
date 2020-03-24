import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationComponent } from './application/application.component';
import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { SuccessRegistrationPageComponent } from './success-registration-page/success-registration-page.component';

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
    SuccessRegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
