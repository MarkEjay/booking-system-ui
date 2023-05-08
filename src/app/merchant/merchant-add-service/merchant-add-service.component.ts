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
  title=new FormControl('');
  description=new FormControl('');
  price=new FormControl('');
  duration=new FormControl('')

  currentMerchant:any;
  actionBtn:string="Save"

  constructor(@Inject(MAT_DIALOG_DATA) public editService:any,private authToken: AuthenticationService ,private merchantService: MerchantService ){}

  ngOnInit(): void {
    this.currentMerchant=this.authToken.getUser()
    
    }

    createService(){
      let serv={
        title: this.title.value,
        description: this.description.value,
        price: this.price.value,
        merchantid: this.currentMerchant.merchantid,
        duration: this.duration.value

      }

      this.merchantService.createService(serv).subscribe(Response=>{
        window.location.reload()
      })
      //console.log(this.currentMerchant)
    }
}
