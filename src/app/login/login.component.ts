import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { User } from '../shared/user';
import { UserFactory } from '../shared/user-factory';
import { UserService } from '../shared/user.service';

interface Response {
  access_token: string
}

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  firstName = '';
  lastName = '';

  constructor(private fb:FormBuilder, 
  private router:Router, private authService:AuthenticationService, private us:UserService) { }

  // Hat leider nicht funktioniert
  //Nach der Anmeldung soll der Vor und Nachname gezeigt werden:
  getUserFirst(){
    if (this.isLoggedIn()) {
      this.firstName = localStorage.getItem("firstName");
    }
  }

  getUserLast(){
    if (this.isLoggedIn()) {
      this.lastName = localStorage.getItem("lastName");
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["",[Validators.required, Validators.email]],
      password:["",Validators.required]
    });
    this.getUserFirst();
    console.log (this.getUserFirst());
    this.getUserLast();
  }

  login(){
    const val = this.loginForm.value;
    if(val.username && val.password){
      this.authService.login(val.username,val.password).subscribe(
        (res)=>{
          this.authService.setLocalStorage((res as Response).access_token);
        }
      );
    }
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
  }
}