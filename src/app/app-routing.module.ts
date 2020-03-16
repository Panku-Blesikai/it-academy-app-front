import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ApplicationsListComponent} from './applications-list/applications-list.component';
import {ApplicationsListPageComponent} from './applications-list-page/applications-list-page.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'applications', component: ApplicationsListPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
