import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ApplicationsListPageComponent} from './applications-list-page/applications-list-page.component';
import {ApplicationPageComponent} from './application-page/application-page.component';
import { SuccessPageComponent } from './success-page/success-page.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'admin/applications/:id', component: ApplicationPageComponent },
  { path: 'admin/applications', component: ApplicationsListPageComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
