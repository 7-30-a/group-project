import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Quiz1Component } from './quizzes/quiz1/quiz1.component';
import { Quiz2Component } from './quizzes/quiz2/quiz2.component';
import { Quiz3Component } from './quizzes/quiz3/quiz3.component';
import { Quiz4Component } from './quizzes/quiz4/quiz4.component';
import { Quiz5Component } from './quizzes/quiz5/quiz5.component';
import { Quiz6Component } from './quizzes/quiz6/quiz6.component';
import { Quiz7Component } from './quizzes/quiz7/quiz7.component';
import { Quiz8Component } from './quizzes/quiz8/quiz8.component';
import { Quiz9Component } from './quizzes/quiz9/quiz9.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    Quiz1Component,
    Quiz2Component,
    Quiz3Component,
    Quiz4Component,
    Quiz5Component,
    Quiz6Component,
    Quiz7Component,
    Quiz8Component,
    Quiz9Component,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule { }
