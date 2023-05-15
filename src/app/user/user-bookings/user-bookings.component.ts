import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
//import { Request } from '../../request';
import { Request } from '../../request';
import { AuthenticationService } from 'src/app/authentication.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, SortDirection,Sort} from '@angular/material/sort';
import { UserRequestComponent } from '../user-request/user-request.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit {

  currentUser: any;
  tableheaders: string[] = ['merchantid', 'created','appointment', 'description', 'status']
  tableBookings: string[] = ['created', 'appointment', 'description', 'status']

  request: Request[]=[];
  booking: Request[] = [];
   pending: any[] = [];
 approved: any[] = [];

  dataSource! : MatTableDataSource<any>

  ngOnInit(): void {
    this.currentUser=this.authToken.getUser()
    this.getRequest();
    this.Bookings();
    }

  constructor(public dialog: MatDialog,private userService:UserService, private authToken: AuthenticationService){}
  getRequest(){
    this.userService.getRequest(this.currentUser.id).subscribe(data=>{
      for (const i of data.request) {
        if (i.status == "pending") {
          this.pending.push(i)
          this.request = this.pending;
          this.dataSource = new MatTableDataSource(this.request)
        //  console.log("pending")
        }
      }
      // this.request=data.request;
      // this.dataSource= new MatTableDataSource(this.request)
    })
   // console.log(req.userId)
  }
  Bookings() {
    this.userService.getRequest(this.currentUser.id).subscribe(data => {
      for (const i of data.request) {
        if (i.status == "approved") {
          this.approved.push(i)
          this.booking = this.approved;
          this.dataSource = new MatTableDataSource(this.booking)
        }
       // console.log(i)
      }
    })
    // console.log(req.userId)
  }
  // openDialog(){
  //   const dialogRef = this.dialog.open(UserRequestComponent);

  //   dialogRef.afterClosed().subscribe(result =>{

  //       console.log("this is update")
  //       window.location.reload()

  //     console.log('Dialog closed')
  //   })
  // }
}
