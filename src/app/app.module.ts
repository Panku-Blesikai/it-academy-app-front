import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationComponent } from './application/application.component';
import { HttpClientModule} from "@angular/common/http";
import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ApplicationsListComponent,
    ApplicationComponent,
    ApplicationsListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
