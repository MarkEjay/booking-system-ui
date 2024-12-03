import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserService } from '../user.service';
import { MerchantService } from 'src/app/merchant/merchant.service';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent implements OnInit{

  //userid:any;
    merchantid=new FormControl('');
    created=new FormControl('');
    appointment=new FormControl('');
    phoneno=new FormControl('')
    guestemail=new FormControl('')
    // date=new FormControl('');
    // time=new FormControl('');

    description=new FormControl('');
    status=new FormControl();
    user:any;
    guest:any;
    // email=new FormControl();

  //  public date = new Date('2023-05-09T21:00:00.000Z');
  //  public time = new Date().getTime()
    
    currentUser: any;
    loggedUser:any

    // time =new Date();

    currentDate = new Date();
    details='';
    usrEmail='';

    actionBtn:string="Save"
   // declineBtn:string="Decline"

    ngOnInit(): void {
      // if(this.authToken.getUser()){
      //   this.currentUser=this.authToken.getUser()
      // // if(this.editRequest){
      // //   this.actionBtn="Approve"
      // //   this.created.setValue(this.editRequest.created)
      // //   this.appointment.setValue(this.editRequest.appointment)
      // //   this.description.setValue(this.editRequest.description)
      // //   this.status.setValue(this.editRequest.status)

      // console.log(this.currentUser)

      // // console.log(this.time)
      // // }
      // console.log(this.bookService.merchantid)
      // this.details = `${this.bookService.title} for CA$${this.bookService.price} `

      // this.getUser()
      // }

      // this.currentUser = this.authToken.getUser();
      this.currentUser = this.authToken.getToken()

    if (this.currentUser) {
      this.loggedUser=this.authToken.getUser()
      console.log(this.loggedUser)
      console.log('Logged in as:', this.currentUser);
      this.getUser();
    } else {
      console.log('Operating as a guest');
    }

      }
    constructor(@Inject(MAT_DIALOG_DATA) public bookService:any,private authToken: AuthenticationService ,private userService: UserService,private merchantService: MerchantService,private dialogRef : MatDialogRef<UserRequestComponent> ){}

    
    sendRequest(){
      
     
      // let rqst={
        
      //   userid: this.currentUser.id,
      //   // useremail:this.currentUser.email,
      //   useremail:this.usrEmail,

      //   merchantid: this.bookService.merchantid,
      //   created: this.currentDate,
      //   // appointment:`${this.date.value}T${this.time.value}:00.000`,
      //   appointment:this.appointment.value,
      //   description:this.bookService.title,
      //   status:"pending"
      // }
      const rqst = {
        userid: this.loggedUser?.id || 'guest-0000', // Use currentUser ID if logged in, else use guest ID
        useremail: this.loggedUser?.email || this.usrEmail.valueOf(), // Use logged-in email or form email for guest
        phoneno: this.loggedUser.phone,
        merchantid: this.bookService.merchantid,
        created: this.currentDate,
        appointment: this.appointment.value,
        //description <-> tittle
        description: this.bookService.title,
        status: 'pending'
      };

      console.log(this.loggedUser)
      console.log(this.phoneno.value)
      console.log(this.bookService)
      console.log(rqst)
      console.log(rqst.appointment)
      // console.log( new Date(rqst.appointment))
      this.userService.addRequest(rqst).subscribe(Response=>{
        window.location.reload()
      })
    }
    sendRequestAsGuest(){
      let rqst={
        
        userid: "guest-0000",
        // useremail:this.currentUser.email,
        useremail:this.guestemail.value,
        phoneno:this.phoneno.value,

        merchantid: this.bookService.merchantid,
        created: this.currentDate,
        // appointment:`${this.date.value}T${this.time.value}:00.000`,
        appointment:this.appointment.value,
        description:this.bookService.title,
        status:"pending"
      }

      console.log(rqst)
      console.log(rqst.appointment)
      // console.log( new Date(rqst.appointment))
      this.userService.addRequest(rqst).subscribe(Response=>{
        window.location.reload()
      })
      console.log(this.phoneno.value)
    }
    
    getUser(){
      this.userService.getUser(this.loggedUser.id).subscribe(
        usr=>{
          // console.log(usr)
          this.user=usr
          this.usrEmail=this.user.email
  
          // console.log(usr)
           console.log(this.user.email)
        }
      )
      // console.log(this.currentUser.id)
  
    }
}
