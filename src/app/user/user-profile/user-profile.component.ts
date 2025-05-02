import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  currentUser: any;
  fname:any;
  lname:any;
  email='';
  phone:any;
  user:any;

  constructor(private authToken: AuthenticationService, private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    
    this.currentUser = this.authToken.getUser();
    this.fname=this.currentUser.firstname
    this.lname=this.currentUser.lastname
    // this.email=this.currentUser.email
    // this.phone=this.currentUser.phone
    this.getUser()
  }

  logout():void{
    this.authToken.logout();
    this.router.navigate(['']);

    // window.location.reload();
  }

  getUser(){
    this.userService.getUser(this.currentUser.id).subscribe(
      usr=>{
        // console.log(usr)
        this.user=usr
       // this.fname=this.user.firstname
        this.email = (this.user.email)
        // this.phone.setValue(this.user.phone)

        // console.log(usr)
        // console.log(this.user)
      }
    )
    // console.log(this.currentUser.id)

  }
}
