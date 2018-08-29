import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any

  register() {

    if(this.user.firstName != null && 
      !this.user.lastName != null  && 
      !this.user.username != null  && 
      !this.user.password != null ){
        this.userService.register(this.user).subscribe((data: any) => {
          if(data.token){
            localStorage.setItem('token', data.token) 
            this.router.navigate(['/login'])
          }
        });
    }
  }

  constructor(private userService: UserService,private router: Router) {

  }

  ngOnInit() {
    this.user = {}
  }

  
}


(function() {
  'use strict';

  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          console.log("allfilled1");
        }
        form.classList.add('was-validated');
        console.log("allfilled2");
      }, false);
    });
  }, false);
})();
