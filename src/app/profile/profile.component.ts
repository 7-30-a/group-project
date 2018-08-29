import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  fn: HTMLElement;
  un: HTMLElement;



  constructor(    
    private userService: UserService,
    private router: Router) {
      console.log("constructor");
    }

  back(){
    this.router.navigate(['/home'])
  }

  edit(){
    this.hideObj(true);
  }

  cancel(){
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");
    card1.classList.remove("hidebtn");
    card2.classList.add("hidebtn");
  }

  save(){

    this.fn.innerHTML = this.user.firstName + ' ' + this.user.lastName
    this.un.innerHTML = this.user.userName;

    this.hideObj(false);

  }

  delete(){
    console.log(this.user.userName)
    this.userService.deleteUser(this.user.id).subscribe((data: any) => {
      console.log(data);
      if(data == 'Delete complete')
      {
        this.userService.logout();
        this.router.navigate(['/login'])
      }

    });
  }

  hideObj(value){
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");

    if (value)
    {

      var spt 
      spt = this.fn.innerText.split(' ');
      
      this.user.id = localStorage.getItem('id');
      this.user.firstName = spt[0];
      this.user.lastName = spt[1];
      this.user.userName = this.un.innerText;
      
      card1.classList.add("hidebtn");
      card2.classList.remove("hidebtn");
    }
    else
    {
      localStorage.setItem('firstName',this.user.firstName);
      localStorage.setItem('lastName',this.user.lastName);
      localStorage.setItem('userName',this.user.userName);
      this.userService.updateUser(this.user).subscribe();
      card1.classList.remove("hidebtn");
      card2.classList.add("hidebtn");
    }
  }



  ngOnInit() {
    this.user = {}

    this.fn = document.getElementById('fullname');
    this.un = document.getElementById('userName');

    this.fn.innerHTML = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
    this.un.innerHTML = localStorage.getItem('userName');
  }

}
