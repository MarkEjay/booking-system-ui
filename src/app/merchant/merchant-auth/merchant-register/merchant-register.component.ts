import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MerchantService } from '../../merchant.service';
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';
import {fill} from "@cloudinary/url-gen/actions/resize";


// interface UploadEvent {
//   originalEvent: Event;
//   files: File[];
// }

@Component({
  selector: 'app-merchant-register',
  templateUrl: './merchant-register.component.html',
  styleUrls: ['./merchant-register.component.css'],
  providers: [MessageService]

})
export class MerchantRegisterComponent {

  img!: CloudinaryImage;

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


  constructor(private merchantService: MerchantService, private messageService: MessageService){}
  // ngOnInit() {

  //   // Create a Cloudinary instance and set your cloud name.
  //   const cld = new Cloudinary({
  //     cloud: {
  //       cloudName: 'dz0rcynyz'
  //     }
      
  //   })
  //       // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  //       this.img = cld.image('profile');

  //       // Resize to 250 x 250 pixels using the 'fill' crop mode.
  //       this.img.resize(fill().width(250).height(250));
  // }
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
      profile:this.previewSource

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

    this.uploadImage(this.previewSource)
  }

  preventSpace(event: KeyboardEvent): void {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }
//   onUpload(event: UploadEvent) {
//     this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
// }
handleFileInputChange(event:any){
  const file = event.target.files[0];
  this.previewFile(file)
  this.uploadImage(this.previewSource)

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
  // console.log(base64)
}

// profile(){
//   this.uploadImage(this.previewSource)
// }
}
