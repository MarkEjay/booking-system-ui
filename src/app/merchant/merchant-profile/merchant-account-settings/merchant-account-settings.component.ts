import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { MerchantService } from '../../merchant.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-merchant-account-settings',
  templateUrl: './merchant-account-settings.component.html',
  styleUrls: ['./merchant-account-settings.component.css']
})
export class MerchantAccountSettingsComponent {

  fname:any;
  lname:any;
  email= new FormControl('');
  phone=new FormControl('');

  address= new FormControl('');
  city=new FormControl('');
  province= new FormControl('');
  postalcode=new FormControl('');
  merchanturl:any;
  currentUser: any;
  merchant:any;
  updateMsg='';

  constructor( private location: Location,private authToken: AuthenticationService, private merchantService: MerchantService){}
  ngOnInit(): void {
    
    this.currentUser = this.authToken.getUser();
    // this.firstName.setValue(this.currentUser.firstname)
    // this.lastName.setValue(this.currentUser.lastname)
    this.phone.setValue(this.currentUser.phone)


    // this.fname=this.currentUser.firstname
    this.lname=this.currentUser.lastname
    
    // this.email=this.currentUser.email
    // this.phone=this.currentUser.phone

    // console.log(this.currentUser)
    this.getMerchant()

    
  }
  // updateUser(){
  //   let merchant={
  //     email: this.email.value
  //   }
  //   this.merchantService.updateUser(user,this.currentUser.id).subscribe(
  //     response=>{
  //       console.log(response)
  //       this.updateMsg="User Updated"
  //     }
  //   )
  // }
  updateMerchant(){
    let mer={
      email:this.email.value
    }
    this.merchantService.updateMerchant(mer,this.currentUser.id).subscribe(
      response=>{
        // console.log(response)

        this.updateMsg="Merchant Updated"
      }
    )
  }

  getMerchant(){
    this.merchantService.getMerchant(this.currentUser.id).subscribe(
      mer=>{
        // console.log(usr)
        this.merchant=mer
        this.fname=this.merchant.firstname
        this.merchanturl='https://neonbooking.vercel.app/user/merchant-page/'+this.merchant.merchantid
        this.email.setValue(this.merchant.email)


        // console.log(usr)
        //  console.log(this.merchant)
      }
    )
    // console.log(this.currentUser.id)

  }
  goBack() {
    this.location.back();
  }
}
