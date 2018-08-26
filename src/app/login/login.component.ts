import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any

  //login() {
  //  this.userService.getUser(1).subscribe((data:any) => {
  //    localStorage.setItem('token', data.firstName) 
  //  });
  //  }

  login() {
  this.userService.login(this.user).subscribe((data: any) => {
      console.log("Assigned token")
      localStorage.setItem('token', data.token) 
      //localStorage.setItem('token', JSON.stringify(this.user)) 
      this.router.navigate(['/home'])

    },
    error => {
      console.log('NOPE')
    }
  );
  }


  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.user = {}
  }

}
