import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quizzes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  
  logOut() {
    this.userService.logout();
    this.router.navigate(['/login'])
   }

   Profile(){
    this.router.navigate(['/profile'])
    
   }
  constructor(private userService: UserService,
    private router: Router) { }

    
  ngOnInit() {
  }

}
