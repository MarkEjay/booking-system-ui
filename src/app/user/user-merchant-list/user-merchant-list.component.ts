import { Component, OnInit } from '@angular/core';
import { Merchant } from 'src/app/merchant/merchant';
import { MerchantService } from 'src/app/merchant/merchant.service';


@Component({
  selector: 'app-user-merchant-list',
  templateUrl: './user-merchant-list.component.html',
  styleUrls: ['./user-merchant-list.component.css']
})
export class UserMerchantListComponent implements OnInit{
  merchants: Merchant[] = [];
  currentUser='';
  isSelected = false

  ngOnInit(): void {
    this.getMerchant()
  }
  constructor(private merchantService: MerchantService){}

 /* getExpense(){
    this.expenseService.getAllexpense().subscribe(data => {
      this.expense=data.expense;
      
      
      this.dataSource= new MatTableDataSource(this.expense)
      this.dataSource.sort = this.sort;

    })
    
  }*/

  getMerchant(){
    this.merchantService.getAllMerchant().subscribe(data=>{
      this.merchants=data.merchant;
    })
  }

  // onClick(id:string){
  //   this.currentUser=id
  //   this.isSelected=true
  // }

  // onBack(){
  //   this.isSelected=false

  // }


}
