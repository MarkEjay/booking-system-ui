import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
 
  isLoggedIn = false;
  showProfile= false;
  //showModeratorBoard = false;
  name?: string;
  isMerchant =false;

  constructor(private authToken: AuthenticationService){}
  
  ngOnInit(): void {
    this.isLoggedIn= !!this.authToken.getToken();

    if(this.isLoggedIn){
      const user = this.authToken.getUser();
      this.name=user.name;
    }
    if(this.authToken.getUser().role=='MERCHANT'){
      console.log(this.authToken.getUser())
      this.isMerchant=true;
    }
  }
  logout():void{
    this.authToken.logout();
    window.location.reload();
  }
}
