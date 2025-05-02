import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  isLoggedIn = false;
  name?:string;
  isMerchant=false

  constructor(private authToken: AuthenticationService){}

  ngOnInit(): void {
    this.isLoggedIn= !!this.authToken.getToken();

    if(this.isLoggedIn){
      const user = this.authToken.getUser();
      this.name=user.name;
    }
    if(this.authToken.getUser().role=='MERCHANT'){
      // console.log(this.authToken.getUser())
      this.isMerchant=true;
    }
    console.log(this.isLoggedIn)
  }

  
}
