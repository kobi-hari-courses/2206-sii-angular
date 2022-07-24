import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { take, filter, firstValueFrom, Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private auth: AuthenticationService){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> 
  {   
    console.log('auth guard now running');

    const isLoggedIn = await firstValueFrom(this.auth.isLoggedIn());

    if (!isLoggedIn) {
      const target = state.url;

      console.log('subscrbing for the next succesful login');
      this.auth.isLoggedIn().pipe(
        filter(val => val === true), 
        take(1)
      ).subscribe(_ => {
        console.log('Hey we have been waiting for succesful login, now i will take you back to ', target);
        this.router.navigateByUrl(target);
      });

      return this.router.createUrlTree(['account']);
    }

    return true;  
  }
  
}
