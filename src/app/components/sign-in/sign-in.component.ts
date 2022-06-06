import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(
    public auth: AngularFireAuth,
    public router: Router
  ) { }

  loginWithGoogle() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => this.router.navigate(['dashboard']))
      .catch((error) => window.alert(error.message));
  }

  loginWithEmailAndPassword(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => this.router.navigate(['dashboard']))
      .catch((error) => window.alert(error.message));
  }

  logout() {
    this.auth
      .signOut()
      .then((result) => this.router.navigate(['sign-in']))
      .catch((error) => window.alert(error.message));
  }
}