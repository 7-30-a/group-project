import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from "./quiz/quiz.component";


const routes: Routes = [

	{ path: "", redirectTo: "/login", pathMatch: "full" },
	{ path: "login", component: LoginComponent },
	{ path: "about", component: AboutComponent },
	{ path: "home", component: HomeComponent },
	{ path: "register", component: RegisterComponent},
	{ path: "quiz/:id", component: QuizComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule {}
