import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any

  register() {
    this.userService.register(this.user).subscribe((data: any) => {
      localStorage.setItem('token', data.token) 
    });
  }

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.user = {}
  }

}
