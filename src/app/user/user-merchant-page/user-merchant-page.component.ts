import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { Merchant } from 'src/app/merchant/merchant';
import { MerchantService } from 'src/app/merchant/merchant.service';
import { Service } from 'src/app/merchant/service';
import { UserRequestComponent } from '../user-request/user-request.component';

@Component({
  selector: 'app-user-merchant-page',
  templateUrl: './user-merchant-page.component.html',
  styleUrls: ['./user-merchant-page.component.css']
})
export class UserMerchantPageComponent {

  //@Input() merchantid= '';
  service:Service[]=[];

  //getId:any;
  merchantid: any;
  companyname:any;

  
  isLoading: boolean = false;
  error: string | null = null;

  constructor(public dialog: MatDialog,private merchantService: MerchantService, private authToken: AuthenticationService, private activatedRoute: ActivatedRoute){}
  // ngOnInit(): void {
  //   this.merchantid = this.activatedRoute.snapshot.paramMap.get('id');
  //  console.log(this.merchantid)
  //  this.getService()

   
  // }

  ngOnInit(): void {
    this.merchantid = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.merchantid) {
      this.getService();
    } else {
      this.error = 'No merchant ID provided';
    }
  }
  // getService(){
  //   this.merchantService.getService(this.merchantid).subscribe(data=>{
  //     this.service = data.service;      
  //     // console.log(this.service)
  //   })
  // }
  getService() {
    if (!this.merchantid) return;

    this.isLoading = true;
    this.error = null;

    this.merchantService.getService(this.merchantid).subscribe({
      next: (data) => {
        this.service = data.service;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading services:', error);
        this.error = 'Failed to load services. Please try again later.';
        this.isLoading = false;
      }
    });
  }
//   bookService(element:any){
//     this.dialog.open(UserRequestComponent,{
//       data: element
//     }).afterClosed().subscribe(result =>{
//       // console.log(merchantid)
//     })
//     //console.log(element.merchantid)
// }
  bookService(service: Service) {
    const dialogRef = this.dialog.open(UserRequestComponent, {
      width: '500px', // Adjust as needed
      data: service
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle successful booking
        console.log('Service booked:', result);
      }
    });
  }


}
