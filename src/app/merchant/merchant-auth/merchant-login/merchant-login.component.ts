import { Component,OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { MerchantService } from '../../merchant.service';

@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.css']
})
export class MerchantLoginComponent implements OnInit {
  email= new FormControl('',Validators.required);
  password= new FormControl('', Validators.required);
  hide = true;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  name='';
  merchantid='';

  constructor(private merchantService: MerchantService ,private authToken: AuthenticationService,private router: Router){}
  ngOnInit():void{
    if(this.authToken.getToken()){
      this.isLoggedIn=true;
      this.name=this.authToken.getUser().firstname;
      this.merchantid=this.authToken.getUser().merchantid;
    }
  }
  onSubmit():void{
    let merchant={
      email: this.email.value,
      password:this.password.value
    }

    this.merchantService.loginMerchant(merchant).subscribe(
      data=>{
        this.authToken.saveToken(data.accessToken);
        this.authToken.saveUser(data);
        this.isLoginFailed=false
        this.isLoggedIn=true
        this.name=this.authToken.getUser().firstname;

        this.router.navigate(['merchant/profile']);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    )
  }
  reloadPage(): void {
    window.location.reload();
  }
}
