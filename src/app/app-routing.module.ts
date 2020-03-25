import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ApplicationsListPageComponent} from './applications-list-page/applications-list-page.component';
import {ApplicationPageComponent} from './application-page/application-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import {SuccessRegistrationPageComponent} from './success-registration-page/success-registration-page.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'application/:idHash', component: ApplicationPageComponent },
  { path: 'admin', component: ApplicationsListPageComponent },
  { path: 'register/success', component: SuccessRegistrationPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
