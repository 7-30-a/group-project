import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
