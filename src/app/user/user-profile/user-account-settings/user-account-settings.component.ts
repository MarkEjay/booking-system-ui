import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserService } from '../../user.service';

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
  
  constructor(private authToken: AuthenticationService, private userService: UserService){
    
  }
  ngOnInit(): void {
    
    this.currentUser = this.authToken.getUser();
    // this.firstName.setValue(this.currentUser.firstname)
    // this.lastName.setValue(this.currentUser.lastname)
    this.email.setValue(this.currentUser.email)
    this.phone.setValue(this.currentUser.phone)


    this.fname=this.currentUser.firstname
    this.lname=this.currentUser.lastname
    // this.email=this.currentUser.email
    // this.phone=this.currentUser.phone

    console.log(this.currentUser)
  }

  updateUser(){
    let user={
      email: this.email.value
    }
    this.userService.updateUser(user,this.currentUser.id).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

  getUser(){
    
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
