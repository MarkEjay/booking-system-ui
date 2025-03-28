import { Component , Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/authentication.service';
import { MerchantService } from 'src/app/merchant/merchant.service';

@Component({
  selector: 'app-merchant-add-service',
  templateUrl: './merchant-add-service.component.html',
  styleUrls: ['./merchant-add-service.component.css']
})
export class MerchantAddServiceComponent implements OnInit {

  merchantid=new FormControl('');
  merchantemail=new FormControl('');

  title=new FormControl('');
  description=new FormControl('');
  currency=new FormControl('')

  price=new FormControl('');
  duration=new FormControl('')

  currentMerchant:any;
  actionBtn:string="Save"

  //
  constructor(private authToken: AuthenticationService ,private merchantService: MerchantService ,private dialogRef: MatDialogRef<MerchantAddServiceComponent>){}

  ngOnInit(): void {
    this.currentMerchant=this.authToken.getUser()
    console.log(this.currentMerchant)
    
    }

    createService(){
      let serv={
        title: this.title.value,
        description: this.description.value,
        currency:this.currency.value,
        price: this.price.value,
        merchantid: this.currentMerchant.merchantid,
        merchantemail: this.currentMerchant.email,
        duration: this.duration.value,
        profile:this.previewSource,
        uniqueId:this.currentMerchant.id


      }


      this.merchantService.createService(serv).subscribe(Response=>{
        console.log("Added successfully")
        window.location.reload()
        // history.go(0);

        
        // window.location.href = window.location.href;
        // this.dialogRef.close(Response); // Close the dialog and return the response


        // console.log(Response);
        

      })

      this.uploadImage(this.previewSource)

      //console.log(this.currentMerchant)
    }

    handleFileInputChange(event:any){
      const file = event.target.files[0];
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
    }
    
    uploadImage(base64:any){
      console.log(base64)
    }
    
}
