import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthguardService implements CanActivate{
  //isLoggedIn=false;

  constructor(private authToken: AuthenticationService,private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.authToken.getToken()){
      if(this.authToken.getUser().role == 'USER'){
        return true;
      }
    }
    //this.router.navigate["/"];
    return false;
  }
}
