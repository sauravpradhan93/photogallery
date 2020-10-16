import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../Service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email:string;
  password:string;
  constructor(private authentication:AuthenticationService, private router:Router){}

  logIn(form:NgForm){
    this.email=form.value.email;
    this.password=form.value.password;
    this.authentication.logIn({email:this.email,password:this.password})
    .then(resolve=>this.router.navigate(['photogallery']))
    .catch(error=>error.message);

  }
}
