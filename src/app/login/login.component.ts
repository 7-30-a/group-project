import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";
import { IfStmt } from '@angular/compiler';

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
      //console.log("Assigned token")
      //console.log(data)
      var lognErr = document.getElementById('loginError')
      if(data.token){
        lognErr.innerHTML = "Invalid Username Or Password"
        lognErr.style.display = 'none'
        localStorage.setItem('token', data.token) 
        localStorage.setItem('firstName', data.firstName)
        localStorage.setItem('lastName', data.lastName)
        localStorage.setItem('userName', data.userName)
        localStorage.setItem('id',data.id)
        this.router.navigate(['/home'])
 
      }
      else{
        
        lognErr.innerHTML = "Invalid Username Or Password"
        lognErr.style.display = 'block'
      }
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
