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

  login() {
    this.userService.login(this.user).subscribe((data: any) => {
      localStorage.setItem('token', data.token) 
      this.router.navigate(['/home'])
    });
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
