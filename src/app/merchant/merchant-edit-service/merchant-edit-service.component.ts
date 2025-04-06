import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/authentication.service';
import { MerchantService } from 'src/app/merchant/merchant.service';
import { Service } from '../service';


@Component({
  selector: 'app-merchant-edit-service',
  templateUrl: './merchant-edit-service.component.html',
  styleUrls: ['./merchant-edit-service.component.css']

})
export class MerchantEditServiceComponent implements OnInit {
  ngOnInit(): void {
    this.currentMerchant = this.authToken.getUser()
    console.log(this.currentMerchant)

    // this.getService()
    console.log(this.data.dataKey)
    this.serviceId=this.data.dataKey
    this.getOneService(this.serviceId)

  }

  serviceId:string=''
  title = new FormControl('');
  description = new FormControl('');
  currency = new FormControl('')

  price = new FormControl('');
  duration = new FormControl('')
  service: Service[] = [];

  actionBtn:string="Save"


  currentMerchant: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authToken: AuthenticationService, private merchantService: MerchantService, private dialogRef: MatDialogRef<MerchantEditServiceComponent>) { }


  editService(id:string) {
    let edit={
      title:this.title.value,
      description:this.description.value,
      currency:this.currency.value,
      price:this.price.value,
      duration:this.duration.value,
      profile:this.previewSource,

    }
    if(this.previewSource){
      this.uploadImage(this.previewSource)
      console.log(this.previewSource)
    }
    
    this.merchantService.editService(edit,id).subscribe(response=>{
      console.log("Edited successfully")
      // this.dialogRef.close(Response); // Close the dialog and return the response
      // setTimeout(() => this.cdr.detectChanges(), 0);
      window.location.reload()


    })

  }
  handleFileInputChange(event:any){
    const file = event.target.files[0];
    // console.log(event.target.files)
    this.previewFile(file)
    // this.uploadImage(this.previewSource)
  
  }
  previewSource:any;
  
  previewFile(file:any){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // console.log(reader.readAsDataURL(file))
    reader.onloadend=()=>{
      this.previewSource=reader.result
    }
    // console.log(reader)
  }
  
  
  uploadImage(base64:any){
    console.log(base64)
  }
  
  getOneService(serviceId:any){
    this.merchantService.getOneService(serviceId).subscribe(data => {
      this.title.setValue(data.title)
      this.description.setValue(data.description)
      this.currency.setValue(data.currency)

      this.price.setValue(data.price)

      this.duration.setValue(data.duration)
      this.previewSource= data.profile


      console.log(data)
    })

  }
  getService() {
    this.merchantService.getService(this.currentMerchant.merchantid).subscribe(data => {
      // this.service = data.service;
      // console.log(this.service)
      // this.title.setValue(data.service.title)

      console.log(data.service)
    })
  }

}
