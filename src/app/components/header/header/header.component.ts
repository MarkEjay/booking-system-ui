import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  showProfile = false;
  //showModeratorBoard = false;
  name?: string;
  isMerchant = false;

  isMobileMenuOpen = false;

  private subscriptions: Subscription = new Subscription();


  // private authSubscription: Subscription = new Subscription();
  // private userSubscription: Subscription = new Subscription();
  constructor(private authToken: AuthenticationService, private router: Router) { }

  // ngOnInit(): void {
  //   this.isLoggedIn= !!this.authToken.getToken();

  //   if(this.isLoggedIn){
  //     const user = this.authToken.getUser();
  //     this.name=user.name;
  //   }
  //   if(this.authToken.getUser().role=='MERCHANT'){
  //     // console.log(this.authToken.getUser())
  //     this.isMerchant=true;
  //   }
  // }

  // ngOnInit(): void {
  //   // Subscribe to auth state changes
  //   // Subscribe to auth state changes
  //   this.subscriptions.add(
  //     this.authToken.isLoggedIn$.subscribe(
  //       (isLoggedIn) => {
  //         this.isLoggedIn = isLoggedIn;
  //         if (isLoggedIn) {
  //           const user = this.authToken.getCurrentUser();
  //           this.name = user.name;
  //           this.isMerchant = user.role === 'MERCHANT';
  //           // this.isMerchant = user.role ? user.role.toUpperCase() === 'MERCHANT' : false;

  //         } else {
  //           this.name = undefined;
  //           this.isMerchant = false;
  //           this.showProfile = false;
  //         }
  //       }
  //     )
  //   );
  // }

  ngOnInit(): void {
  this.subscriptions.add(
    this.authToken.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    })
  );

  this.subscriptions.add(
    this.authToken.currentUser$.subscribe((user) => {
      if (user) {
        this.name = user.name;
        this.isMerchant = user.role === 'MERCHANT';
      } else {
        this.name = undefined;
        this.isMerchant = false;
      }
    })
  );
}


  // Subscribe to user state changes
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  logout(): void {
    this.authToken.logout();
    // window.location.reload();
    this.router.navigate(['/']);

  }
}
