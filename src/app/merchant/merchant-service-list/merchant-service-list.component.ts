import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticationService } from 'src/app/authentication.service';
import { MerchantAddServiceComponent } from '../merchant-add-service/merchant-add-service.component';
import { MerchantEditServiceComponent } from '../merchant-edit-service/merchant-edit-service.component';
import { MerchantService } from '../merchant.service';
import { Service } from '../service';


@Component({
  selector: 'app-merchant-service-list',
  templateUrl: './merchant-service-list.component.html',
  styleUrls: ['./merchant-service-list.component.css']
})
export class MerchantServiceListComponent implements OnInit {

  tableheaders: string[] = ['merchantid', 'title', 'description', 'price', 'duration', 'edit', 'delete']
  currentUser: any;

  service: Service[] = [];

  dataSource!: MatTableDataSource<any>

  ngOnInit(): void {
    this.currentUser = this.authToken.getUser()
    this.getService()
  }

  constructor(public dialog: MatDialog, private merchantService: MerchantService, private authToken: AuthenticationService, private cdr: ChangeDetectorRef) { }

  getService() {
    this.merchantService.getService(this.currentUser.merchantid).subscribe(data => {
      this.service = data.service;
      this.dataSource = new MatTableDataSource(this.service)
      // console.log(this.service)
    })
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(MerchantAddServiceComponent);


  //   dialogRef.afterClosed().subscribe(result => {

  //     if (result?.data) { // Ensure data exists
  //       this.merchantService.createService(result.data).subscribe(response => {
  //         console.log("Added successfully", response);
  
  //         // Ensure response is valid before updating UI
  //         if (response) {
  //           this.service = [...this.service, response]; // Append new service
  //           this.dataSource.data = this.service; // Update MatTable data source
  //           this.cdr.detectChanges(); // Force UI update
  //         }
  //       }
  //       )
  //     }

      
  //     // this.getService();

  //     //  this.merchantService.createService(result.data).subscribe(Response=>{
  //     //   console.log("Added successfully")


  //     // })
  //     // this.cdr.detectChanges(); // Update the view

  //   })
  // }

  openDialog() {
    const dialogRef = this.dialog.open(MerchantAddServiceComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog Result:", result); // Debugging
  
      if (result?.data) { 
        this.merchantService.createService(result.data).subscribe(response => {
          console.log("API Response:", response); // Debugging
  
          if (response) {
            this.service = [...this.service, response];
            this.dataSource.data = this.service; // Update MatTable
            this.cdr.detectChanges(); // 
          }
        }, error => {
          console.error("Error creating service:", error); // Debugging errors
        });
      }
    });
  }
  deleteService(id: string) {
    // this.merchantService.deleteService(id).subscribe(response =>{
    //   window.location.reload()
    //   console.log('deleted')


    // })

    this.merchantService.deleteService(id).subscribe(response => {
      this.getService(); // Fetch updated list instead of reloading
      setTimeout(() => this.cdr.detectChanges(), 0);
    });
    // this.merchantService.deleteRequest(id).subscribe(response => {
    //   this.getRequest()
    //   window.location.reload()

    //   console.log('deleted')
    // })
  }
  openEdit(id: any) {
    const dialogEdit = this.dialog.open(MerchantEditServiceComponent, {
      data: {
        dataKey: id
      }
    });

    dialogEdit.afterClosed().subscribe(result => {


      this.getService(); // Fetch updated list instead of reloading
      setTimeout(() => this.cdr.detectChanges(), 0);
      // if (result) { // Only update if a new service was added
      //   this.getService(); // Fetch updated list instead of reloading
      //   setTimeout(() => this.cdr.detectChanges(), 0);
      // }
    })
  }




}
