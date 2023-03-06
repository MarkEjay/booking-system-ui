import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
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
