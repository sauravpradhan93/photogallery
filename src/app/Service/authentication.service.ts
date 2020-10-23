import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {UserModel} from '../Model/usermodel.model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService{
private userid:Observable<firebase.User>;

constructor(private firebaseAuth:AngularFireAuth,private router:Router){
  this.userid=firebaseAuth.authState;
}
  logIn(user:UserModel){
return this.firebaseAuth.auth.signInWithEmailAndPassword(user.email,user.password);
}

logOut(){
  this.firebaseAuth.auth.signOut()
  .then(resolve=>this.router.navigate(['login']));
}

authUser(){
  return this.userid;
}
}
