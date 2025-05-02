import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserRequestComponent } from 'src/app/user/user-request/user-request.component';
import { UserService } from 'src/app/user/user.service';
import { MerchantService } from '../merchant.service';

const pending: any[] = [];


@Component({
  selector: 'app-merchant-bookings',
  templateUrl: './merchant-bookings.component.html',
  styleUrls: ['./merchant-bookings.component.css']
})
export class MerchantBookingsComponent implements OnInit {
  currentUser: any;
  tableheaders: string[] = [ 'appointment','firstname','lastname', 'description','phoneno', 'approve', 'decline']
  tableBookings: string[] = ['appointment', 'firstname','lastname','description', 'status','useremail','phoneno']


  request: Request[] = [];
  booking: Request[] = [];
  approved: any[] = [];
  pending: any[] = [];


  
  //ending="pending";

  dataSource!: MatTableDataSource<any>
  //bookingData!: MatTableDataSource<any>

  ngOnInit(): void {
    this.currentUser = this.authToken.getUser()
    this.getRequest();
    this.Bookings();

    //console.log(this.currentUser.merchantid)
    //console.log(this.currentUser.userid)

  }

  constructor(public dialog: MatDialog, private merchantService: MerchantService, private authToken: AuthenticationService) { }
  getRequest() {
    this.merchantService.getRequest(this.currentUser.merchantid).subscribe(data => {
      // console.log(data)

      for (const i of data.request) {
          //console.log(data.request[i].status)

        if (i.status == "pending") {
          //console.log("hello")
          //console.log(data.request[i])
          this.pending.push(i)
          this.request = this.pending;
          this.dataSource = new MatTableDataSource(this.request)
          //console.log(pending)
        }
      }
    })
  }
  Bookings() {
    this.merchantService.getRequest(this.currentUser.merchantid).subscribe(data => {
      for (const i of data.request) {
        if (i.status == "approved") {
          //console.log(i)
         
          this.approved.push(i)
          this.booking = this.approved;
          this.dataSource = new MatTableDataSource(this.booking)
          
         // console.log("approved")

        }

      }
      
    })
    // console.log(req.userId)
    // console.log(this.approved)

  }

  approveRequest(element: any) {
    let rqst = {
      status: "approved"
    }
    this.merchantService.updateRequest(rqst, element._id).subscribe(Response => {
      window.location.reload()
    })


  //  console.log(element)

  }

  deleteRequest(id: string) {
    this.merchantService.deleteRequest(id).subscribe(response => {
      this.getRequest()
      window.location.reload()

      console.log('deleted')
    })
  }

}
