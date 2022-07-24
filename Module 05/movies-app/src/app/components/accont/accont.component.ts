import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-accont',
  templateUrl: './accont.component.html',
  styleUrls: ['./accont.component.css']
})
export class AccontComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
