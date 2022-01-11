import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  submit(form:any)
  {
    var username = form.username;
    console.log(username);
     
    var password = form.password;
    console.log(password);
    this.router.navigate(['/nav']);
  
  }
  show_button: Boolean = false;
  show_eye: Boolean = false;
  
  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }

  ngOnInit(): void {
  }

}
