import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any
  isloading = false;

  register() {
    console.log("Register!")
    this.userService.register(this.user).subscribe((data: any) => {
      localStorage.setItem('token', data.token) 
    });
  }

  getUser(){
    console.log("getUser HIT");
    this.userService.getUser(this.user).subscribe(data => this.user = data,error => console.log(error),() => this.isloading = false);
  }


  constructor(private userService: UserService) {

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
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
