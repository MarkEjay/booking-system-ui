// import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
// import { UserService } from '../../user.service';
// import { AuthenticationService } from 'src/app/authentication.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   email= new FormControl('',Validators.required);
//   password= new FormControl('', Validators.required);
//   hide = true;

//   isLoggedIn = false;
//   isLoginFailed = false;
//   errorMessage = '';
//   name='';
//   role='';
//   isMerch=true;
//   constructor(private userService: UserService, private authToken: AuthenticationService, private router: Router){}

//   ngOnInit():void{
//     if(this.authToken.getToken()){
//       this.isLoggedIn=true;
//       this.name=this.authToken.getUser().firstname;
//       this.role=this.authToken.getUser().role;
//       if(this.role == 'USER'){
//         this.isMerch=false
//       }

//     }
//   }

//   onSubmit():void{
//     let usr={
//       email: this.email.value,
//       password:this.password.value
//     }

//     this.userService.loginUser(usr).subscribe(
//       data=>{
//         this.authToken.saveToken(data.accessToken);
//         this.authToken.saveUser(data);
//         this.isLoginFailed=false
//         this.isLoggedIn=true
//         this.name=this.authToken.getUser().firstname;
//         //this.reloadPage();

//         this.router.navigate(['/user/profile']);
//         this.reloadPage();

//       },
//       err => {
//         this.errorMessage = err.error.message;
//         this.isLoginFailed = true;
//       }
//     )
//   }
//   reloadPage(): void {
//     window.location.reload();
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  hide = true;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  name = '';
  role = '';
  isMerch = true;
  constructor(private userService: UserService, private authToken: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if (this.authToken.getToken()) {
      this.isLoggedIn = true;
      this.name = this.authToken.getUser().firstname;
      this.role = this.authToken.getUser().role;
      if (this.role == 'USER') {
        this.isMerch = false;
      }
    }
  }

  onSubmit(): void {
    let usr = {
      email: this.email.value,
      password: this.password.value
    }

    this.userService.loginUser(usr).subscribe(
      data => {
        this.authToken.saveToken(data.accessToken);
        this.authToken.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.name = this.authToken.getUser().firstname;
        
        // Navigate to profile page without page reload
        this.router.navigate(['user/profile']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  // Remove the reloadPage method as it's no longer needed
}