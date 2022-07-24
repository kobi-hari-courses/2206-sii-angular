import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/models/auth-state.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  authState$!: Observable<AuthState>

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.authState$ = this.auth.getState();
  }

}
