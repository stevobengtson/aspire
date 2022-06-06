import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aspire';

  constructor(
    public auth: AngularFireAuth,
    public router: Router
  ) { }

  logout() {
    this.auth
      .signOut()
      .then((result) => this.router.navigate(['sign-in']))
      .catch((error) => window.alert(error.message));
  }
}
