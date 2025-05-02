import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Merchant } from 'src/app/merchant/merchant';
import { MerchantService } from 'src/app/merchant/merchant.service';



@Component({
  selector: 'app-user-merchant-lookup',
  templateUrl: './user-merchant-lookup.component.html',
  styleUrls: ['./user-merchant-lookup.component.css']
})
export class UserMerchantLookupComponent {

  searchControl = new FormControl('');
  merchants: any[] = [];
  isLoading = false;
  noResults = false;
  searchPerformed = false;

  constructor(private merchantService: MerchantService){}

  gOnInit() {
    // Add debounce time to search input
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      if (value) {
        this.searchMerchants(value);
      } else {
        this.merchants = [];
        this.searchPerformed = false;
      }
    });
  }
  // searchMerchants(merc: string) {
  //   this.isLoading = true;
  //   this.searchPerformed = true;
    
  //   // Replace with your actual service method
  //   this.merchantService.getByMerchantId(merc).subscribe({
  //     next: (response) => {
  //       this.merchants = response;
  //       this.noResults = this.merchants.length === 0;
  //       this.isLoading = false;
  //     },
  //     error: (error) => {
  //       console.error('Error searching merchants:', error);
  //       this.isLoading = false;
  //       this.merchants = [];
  //       this.noResults = true;
  //     }
  //   });
  // }

  searchMerchants(merc: string) {
    this.isLoading = true;
    this.searchPerformed = true;
    
    this.merchantService.getByMerchantId(merc).subscribe({
      next: (response) => {
        // Since findOne returns a single object, wrap it in an array
        this.merchants = response ? [response] : [];
        this.noResults = this.merchants.length === 0;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error searching merchants:', error);
        this.isLoading = false;
        this.merchants = [];
        this.noResults = true;
      }
    });
}
}
