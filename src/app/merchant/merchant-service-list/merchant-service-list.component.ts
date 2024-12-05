import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticationService } from 'src/app/authentication.service';
import { MerchantAddServiceComponent } from '../merchant-add-service/merchant-add-service.component';
import { MerchantService } from '../merchant.service';
import { Service } from '../service';

@Component({
  selector: 'app-merchant-service-list',
  templateUrl: './merchant-service-list.component.html',
  styleUrls: ['./merchant-service-list.component.css']
})
export class MerchantServiceListComponent implements OnInit{
  
  tableheaders: string[] = ['merchantid', 'title','description', 'price','duration','delete']
  currentUser: any;

  service:Service[]=[];

  dataSource! : MatTableDataSource<any>

  ngOnInit(): void {
    this.currentUser=this.authToken.getUser()
    this.getService()
  }

  constructor(public dialog: MatDialog, private merchantService: MerchantService, private authToken: AuthenticationService){}

  getService(){
    this.merchantService.getService(this.currentUser.merchantid).subscribe(data=>{
      this.service = data.service;
      this.dataSource = new MatTableDataSource(this.service)
      console.log(this.service)
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(MerchantAddServiceComponent);


    dialogRef.afterClosed().subscribe(result =>{
      //console.log("this is updat")
      window.location.reload()
    })
  }

  deleteService(id: string) {
    this.merchantService.deleteService(id).subscribe(response =>{
      window.location.reload()
      console.log('deleted')


    })
    // this.merchantService.deleteRequest(id).subscribe(response => {
    //   this.getRequest()
    //   window.location.reload()

    //   console.log('deleted')
    // })
  }


}
