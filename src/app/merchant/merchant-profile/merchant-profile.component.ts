import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-merchant-profile',
  templateUrl: './merchant-profile.component.html',
  styleUrls: ['./merchant-profile.component.css']
})
export class MerchantProfileComponent implements OnInit{

  currentUser: any;
  fname:any;
  lname:any;
  email:any;
  phone:any;

  constructor(private router: Router,private authToken: AuthenticationService) { }

  ngOnInit(): void {
    this.currentUser = this.authToken.getUser();
    this.fname=this.currentUser.firstname
    this.lname=this.currentUser.lastname
    this.email=this.currentUser.email
    this.phone=this.currentUser.phone
    // console.log(this.currentUser.merchantid)
  }

  logout():void{
    this.authToken.logout();
    
    this.router.navigate(['']);
  }
}
