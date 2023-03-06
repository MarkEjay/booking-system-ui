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
    description=new FormControl('');
    status=new FormControl();

    currentUser: any;

    currentDate = new Date();

    actionBtn:string="Save"
   // declineBtn:string="Decline"

    ngOnInit(): void {
      this.currentUser=this.authToken.getUser()
      // if(this.editRequest){
      //   this.actionBtn="Approve"
      //   this.created.setValue(this.editRequest.created)
      //   this.appointment.setValue(this.editRequest.appointment)
      //   this.description.setValue(this.editRequest.description)
      //   this.status.setValue(this.editRequest.status)


      // }
      }
    constructor(@Inject(MAT_DIALOG_DATA) public editRequest:any,private authToken: AuthenticationService ,private userService: UserService,private merchantService: MerchantService,private dialogRef : MatDialogRef<UserRequestComponent> ){}

    // approveRequest(){
    //   let rqst={
    //     status:"approved"
    //   }
    //   this.merchantService.updateRequest(rqst,this.editRequest._id)
    //   .subscribe(
    //     response=>{
    //       this.dialogRef.close()
    //       console.log(response)
    //     }
    //   )
    // }
    sendRequest(){
     // if(!this.editRequest){
      let rqst={
        userid: this.currentUser.id,
        merchantid: this.merchantid.value,
        created: this.currentDate,
        appointment:this.appointment.value,
        //this.appointment.value,
        description:this.description.value,
        status:"pending"
      }
      this.userService.addRequest(rqst).subscribe(Response=>{
        window.location.reload()
      })
    }
  //   else{
  //     this.approveRequest()
  //   }
  // }
}
