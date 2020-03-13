import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    RegisterPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
