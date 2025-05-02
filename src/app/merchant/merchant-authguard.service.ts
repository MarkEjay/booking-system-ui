import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MerchantAuthguardService implements CanActivate {

  constructor(private authToken: AuthenticationService,private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.authToken.getToken()){
      if(this.authToken.getUser().role == 'MERCHANT'){
        return true;
      }
    }
    //this.router.navigate["/"];
    return false;
  }
}
