import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { Quiz1Component } from "./quizzes/quiz1/quiz1.component";
import { Quiz2Component } from "./quizzes/quiz2/quiz2.component";
import { Quiz3Component } from "./quizzes/quiz3/quiz3.component";
import { Quiz4Component } from "./quizzes/quiz4/quiz4.component";
import { Quiz5Component } from "./quizzes/quiz5/quiz5.component";
import { Quiz6Component } from "./quizzes/quiz6/quiz6.component";
import { Quiz7Component } from "./quizzes/quiz7/quiz7.component";
import { Quiz8Component } from "./quizzes/quiz8/quiz8.component";
import { Quiz9Component } from "./quizzes/quiz9/quiz9.component";


const routes: Routes = [

	{ path: "", redirectTo: "/login", pathMatch: "full" },
	{ path: "login", component: LoginComponent },
	{ path: "about", component: AboutComponent },
	{ path: "home", component: HomeComponent },
	{ path: "quiz1", component: Quiz1Component },
	{ path: "quiz2", component: Quiz2Component },
	{ path: "quiz3", component: Quiz3Component },
	{ path: "quiz4", component: Quiz4Component },
	{ path: "quiz5", component: Quiz5Component },
	{ path: "quiz6", component: Quiz6Component },
	{ path: "quiz7", component: Quiz7Component },
	{ path: "quiz8", component: Quiz8Component },
	{ path: "quiz9", component: Quiz9Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
