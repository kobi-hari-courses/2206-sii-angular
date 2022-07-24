import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthState } from '../models/auth-state.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private value: boolean = false;
  private value$ = new BehaviorSubject<boolean>(this.value);
  
  constructor() { }

  isLoggedIn(): Observable<boolean> {
    return this.value$.asObservable();
  }

  getState(): Observable<AuthState> {
    return this.isLoggedIn().pipe(
      map(val => val ? 'Logged In' : 'Guest')
    );
  }

  login() {
    this.value = true;
    this.value$.next(this.value);
  }

  logout() {
    this.value = false;
    this.value$.next(this.value);
  }
}
