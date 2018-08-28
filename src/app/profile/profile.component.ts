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

  constructor(    
    private userService: UserService,
    private router: Router) {
      console.log("constructor");
      //this.user = JSON.parse(localStorage.getItem('token'));
    }

  back(){
    //console.log(this.user.userName)
    this.router.navigate(['/home'])
  }

  edit(){

    this.hideObj(true);
  }

  save(){
    console.log("Save");
    //fullname userName
    var fn = document.getElementById('fullname')
    var un = document.getElementById('userName')

    fn.innerHTML = this.user.firstName + ' ' + this.user.lastName
    un.innerHTML = this.user.userName;
    this.hideObj(false);

  }

  updateUser(user){
    this.userService.getUser(user).subscribe(

    )
  }

  hideObj(value){
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");
    //var fn = document.getElementById("fullname");
    //var editbtn = document.getElementById("editbtn");
    //var savebtn = document.getElementById("savebtn");


    //inputfn.value = "test";
    //inputln.value = "TEST2";
    //inputun.value = "test3";

    if (value)
    {


      var inputfn = document.getElementById("inputFirstname");
      var inputln = document.getElementById("inputLastname");
      var inputun = document.getElementById("inputUsername");
      var fn = document.getElementById('fullname')
      var un = document.getElementById('userName')
      var spt 

      spt = fn.innerText.split(' ');
      console.log(spt[0]);
      this.user.firstName = spt[0];
      this.user.lastName = spt[1];
      this.user.userName = un.innerText;

      card1.classList.add("hidebtn");
      card2.classList.remove("hidebtn");
      //savebtn.classList.remove("hidebtn");
      //inputfn.classList.remove("hidebtn");
      //inputln.classList.remove("hidebtn");
      //inputun.classList.remove("hidebtn");

      //editbtn.classList.add("hidebtn");
      //fn.classList.add("hideP");
    }
    else
    {
      card1.classList.remove("hidebtn");
      card2.classList.add("hidebtn");
      //savebtn.classList.add("hidebtn");
      //inputfn.classList.add("hidebtn");
      //inputln.classList.add("hidebtn");
      //inputun.classList.add("hidebtn");

      //editbtn.classList.remove("hidebtn");
      //fn.classList.remove("hideP");
    }
  }



  ngOnInit() {
    this.user = {}
  }

}
