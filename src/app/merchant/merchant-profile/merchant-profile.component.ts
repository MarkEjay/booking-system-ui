import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-merchant-profile',
  templateUrl: './merchant-profile.component.html',
  styleUrls: ['./merchant-profile.component.css']
})
export class MerchantProfileComponent implements OnInit{

  currentUser: any;

  constructor(private authToken: AuthenticationService) { }

  ngOnInit(): void {
    this.currentUser = this.authToken.getUser();
  }

  logout():void{
    this.authToken.logout();
    window.location.reload();
  }
}
