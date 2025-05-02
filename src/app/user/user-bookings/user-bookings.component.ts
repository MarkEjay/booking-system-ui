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
  pending: Request[] = [];
  approved: Request[] = [];
 isLoading = false;

  dataSource! : MatTableDataSource<any>

  searchTextRequests = '';
  searchTextBookings = '';
  ngOnInit(): void {
    this.currentUser=this.authToken.getUser()
    // this.getRequest();
    // this.Bookings();
    this.loadData()
    }
    loadData(): void {
      this.isLoading = true;
      this.getRequest();
      this.Bookings();
    }
  

  constructor(public dialog: MatDialog,private userService:UserService, private authToken: AuthenticationService){}
  // getRequest(){
  //   this.userService.getRequest(this.currentUser.id).subscribe(data=>{
  //     for (const i of data.request) {
  //       if (i.status == "pending") {
  //         this.pending.push(i)
  //         this.request = this.pending;
  //         this.dataSource = new MatTableDataSource(this.request)
  //       //  console.log("pending")
  //       }
  //     }
  //     // this.request=data.request;
  //     // this.dataSource= new MatTableDataSource(this.request)
  //   })
  //  // console.log(req.userId)
  // }
  // Bookings() {
  //   this.userService.getRequest(this.currentUser.id).subscribe(data => {
  //     for (const i of data.request) {
  //       if (i.status == "approved") {
  //         this.approved.push(i)
  //         this.booking = this.approved;
  //         this.dataSource = new MatTableDataSource(this.booking)
  //       }
  //      // console.log(i)
  //     }
  //   })
  //   // console.log(req.userId)
  // }
  getRequest(): void {
    this.userService.getRequest(this.currentUser.id).subscribe({
      next: (data) => {
        this.pending = [];
        for (const i of data.request) {
          if (i.status.toLowerCase() === 'pending') {
            this.pending.push(i);
          }
        }
        this.request = this.pending;
      },
      error: (error) => {
        console.error('Error fetching requests:', error);
      }
    });
  }

  Bookings(): void {
    this.userService.getRequest(this.currentUser.id).subscribe({
      next: (data) => {
        this.approved = [];
        for (const i of data.request) {
          if (i.status.toLowerCase() === 'approved') {
            this.approved.push(i);
          }
        }
        this.booking = this.approved;
      },
      error: (error) => {
        console.error('Error fetching bookings:', error);
      }
    });
  }
  applyRequestFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.request = this.pending.filter(item =>
      this.matchesFilter(item, filterValue)
    );
  }

  applyBookingFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.booking = this.approved.filter(item =>
      this.matchesFilter(item, filterValue)
    );
  }
  private matchesFilter(item: Request, filterValue: string): boolean {
    return (
      item.created?.toLowerCase().includes(filterValue) ||
      item.description?.toLowerCase().includes(filterValue) ||
      item.merchantid?.toLowerCase().includes(filterValue) ||
      item.status?.toLowerCase().includes(filterValue)
    );
  }

  filterByStatus(status: string): void {
    if (status === 'all') {
      this.request = this.pending;
    } else {
      this.request = this.pending.filter(
        item => item.status.toLowerCase() === status.toLowerCase()
      );
    }
  }



  viewDetails(booking: Request): void {
    // Implement your view details logic here
    console.log('Viewing details for booking:', booking);
  }
  cancelBooking(booking: Request): void {
    if (confirm('Are you sure you want to cancel this booking?')) {
      // Implement your cancel booking logic here
      console.log('Cancelling booking:', booking);
    }
  }

  formatDate(date: string | Date): string {
    return new Date(date).toLocaleString();
  }

  refreshData(): void {
    this.loadData();
  }
  getStatusClass(status: string): string {
    status = status.toLowerCase();
    return {
      pending: 'status-pending',
      approved: 'status-approved',
      cancelled: 'status-cancelled',
      rejected: 'status-rejected'
    }[status] || '';
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
