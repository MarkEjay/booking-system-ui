import { Component,OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  name='';
  merchantid='';

  constructor(private merchantService: MerchantService ,private authToken: AuthenticationService){}
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
        this.reloadPage();

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
