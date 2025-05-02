import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-user-account-settings',
  templateUrl: './user-account-settings.component.html',
  styleUrls: ['./user-account-settings.component.css']
})
export class UserAccountSettingsComponent {

  // firstName= new FormControl('');
  // lastName= new FormControl('');
  fname:any;
  lname:any;
  email= new FormControl('');
  phone=new FormControl('');

  address= new FormControl('');
  city=new FormControl('');
  province= new FormControl('');
  postalcode=new FormControl('');

  currentUser: any;
  user:any;
  updateMsg='';
  
  constructor(    private location: Location,
    private authToken: AuthenticationService, private userService: UserService, private router:Router){
    
  }
  ngOnInit(): void {
    
    this.currentUser = this.authToken.getUser();
    // this.firstName.setValue(this.currentUser.firstname)
    // this.lastName.setValue(this.currentUser.lastname)
    // this.phone.setValue(this.currentUser.phone)


    // this.fname=this.currentUser.firstname
    this.lname=this.currentUser.lastname
    
    // this.email=this.currentUser.email
    // this.phone=this.currentUser.phone

    // console.log(this.currentUser)
    this.getUser()

    
  }

  updateUser(){
    let user={
      email: this.email.value,
      phone:this.phone.value
    }
    this.userService.updateUser(user,this.currentUser.id).subscribe(
      response=>{
        console.log(response)
        this.updateMsg="User Updated"
      }
    )
  }
  

  getUser(){
    this.userService.getUser(this.currentUser.id).subscribe(
      usr=>{
        // console.log(usr)
        this.user=usr
        this.fname=this.user.firstname
        this.email.setValue(this.user.email)
        this.phone.setValue(this.user.phone)

        // console.log(usr)
        // console.log(this.user)
      }
    )
    // console.log(this.currentUser.id)

  }

  goBack() {
    this.location.back();
  }
  // updateExpense(){
  //   let ex={
  //     title: this.title.value,
  //     price: this.price.value,
  //     category: this.category.value,
  //     description: this.description.value,
  //     purchaseDate: this.purchaseDate.value

  //   }
  //  this.expenseService.updateExpense(ex, this.editExpense._id)
  //  .subscribe(
  //    response=>{
  //     this.dialogRef.close()
  //      console.log(response);
  //    }
  //  )
  // }
}
