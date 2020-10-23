import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../Service/authentication.service';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  user:Observable<firebase.User>
constructor(private authentication:AuthenticationService, private router:Router){}

ngOnInit(){
    this.user=this.authentication.authUser();
  }

  logOut(){
    this.authentication.logOut()

  }
  openUpload(){
    this.router.navigate(['upload']);
  }
}

