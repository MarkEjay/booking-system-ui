import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MerchantService } from '../../merchant.service';

@Component({
  selector: 'app-merchant-register',
  templateUrl: './merchant-register.component.html',
  styleUrls: ['./merchant-register.component.css']
})
export class MerchantRegisterComponent {
  firstname= new FormControl('',Validators.required);
  lastname = new FormControl('',Validators.required);
  companyname = new FormControl('');
  merchantid = new FormControl('',Validators.required);
  phone = new FormControl('');
  email = new FormControl('',Validators.required);
  password = new FormControl('',Validators.required);

  isSuccessful=false;
  isSignUpFailed=false;
  errorMessage='';
  successMsg='';


  constructor(private merchantService: MerchantService){}

  onSubmit(){
    let merch = {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      companyname:this.companyname.value,
      merchantid:this.merchantid.value,
      phone: this.phone.value,
      role:'MERCHANT',
      email: this.email.value,
      password: this.password.value,

    }
    this.merchantService.createMerchant(merch).subscribe(response =>{
      console.log(response);
        this.isSuccessful = true;
        console.log(response.message)
        this.successMsg="Account Created Successfully"
        // this.isSignUpFailed = false;
    },err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;}
    )
  }
}
