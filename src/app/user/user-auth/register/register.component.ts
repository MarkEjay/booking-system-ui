import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  firstname= new FormControl('',Validators.required);
  lastname = new FormControl('',Validators.required);
  phone = new FormControl('');
  email = new FormControl('',Validators.required);
  password = new FormControl('',Validators.required);

  isSuccessful=false;
  isSignUpFailed=false;
  errorMessage='';
  successMsg='';
  hidePassword = true; // Add this to your component class

  constructor(private userService: UserService){}
  ngOnInit(): void {
  }

  isFormValid(): boolean {
    return (
      this.email.valid &&
      this.password.valid &&
      this.firstname.valid &&
      this.lastname.valid &&
      this.phone.valid
    );
  }
  onSubmit(){
    let usr = {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      phone: this.phone.value,
      role:'USER',
      email: this.email.value,
      password: this.password.value,

    }
    this.userService.createUser(usr).subscribe(response =>{
      console.log(response);
        this.isSuccessful = true;
        // this.isSignUpFailed = false;
        // this.successMsg=response.error.text;
        // console.log(this.successMsg)
    },err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
      console.log(err)
    }
      
    )
  }


}
