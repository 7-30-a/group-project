import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { Quiz4Component } from "./quizzes/quiz4.component";
import { Quiz5Component } from "./quizzes/quiz5.component";
import { Quiz6Component } from "./quizzes/quiz6.component";

const routes: Routes = [

	{ path: "", redirectTo: "/login", pathMatch: "full" },
	{ path: "login", component: LoginComponent },
	{ path: "about", component: AboutComponent },
	{ path: "home", component: HomeComponent },
	{ path: "quiz4", component: Quiz4Component },
	{ path: "quiz5", component: Quiz5Component },
	{ path: "quiz6", component: Quiz6Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
