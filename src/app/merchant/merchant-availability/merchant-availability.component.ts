import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { MerchantService } from '../merchant.service';
import {MegaMenuItem,MenuItem} from 'primeng/api';


@Component({
  selector: 'app-merchant-availability',
  templateUrl: './merchant-availability.component.html',
  styleUrls: ['./merchant-availability.component.css']
})

export class MerchantAvailabilityComponent implements OnInit {

  tableheaders: string[] = [ 'time','delete']

  selectedDate: Date | null = null;

  currentMerchant:any;
  selectedTime: Date | null = null;
  formattedTime: string | null = null; // Holds the formatted time
  time:any|null=null;
  day:String[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  selectedDay:string|null=null;
  dayString:string[]|null=[];


  sunday:String[]=[];
  monday:String[]=[];
  tuesday:String[]=[];
  wednesday:String[]=[];
  thursday:String[]=[];
  friday:String[]=[];
  saturday:String[]=[];


  items!: MegaMenuItem[];


  
  onDateChange(date: Date): void {
    this.selectedDate = date;
  }
  getDay(day:any):any{

  }

  selectedTimes(time: Date): void {
    this.selectedTime = time;
  }

  constructor( private authToken: AuthenticationService ,private merchantService: MerchantService ){}
  ngOnInit(): void {
    this.currentMerchant=this.authToken.getUser()
    this.viewAvailability()
    
  
    this.items = [
      {
          label: 'Videos',
          items: [
              
              [
                  {
                      items: [{label: 'Video 3.1'}]
                  },
                 
              ]
          ]
      }
      
     
      
  ]

  }

  // addAvailability(){
  //   if (this.selectedTime) {
  //     // Format the time into HH:mm or hh:mm a
  //     const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
  //     this.formattedTime = this.selectedTime.toLocaleTimeString('en-US', options);
      
  //     // Log or send the formatted time
  //     console.log('Formatted Time:', this.formattedTime);
  //   } else {
  //     alert('Please select a date and time slot.');
  //   }

  //   let addtime={
  //     email:this.currentMerchant.email,
  //     time:this.formattedTime
  //   }

  //   this.merchantService.addAvailability(addtime).subscribe(Response=>{
  //     window.location.reload()
  //   })
  // }
  
  addAvailability() {
    // Check if `selectedTime` is null or undefined
    // if (this.selectedDate ) {
    //   alert(`You selected ${this.selectedDate.getDay()}`);
    // } else {
    //   alert('Please select a date and time slot.');
    // }
    if (!this.selectedTime && !this.selectedDate) {
      alert('Please select a valid time slot before adding availability.');
      return; // Exit the function if no time is selected
    }
  
    // Format the time into HH:mm or hh:mm a
    const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    this.formattedTime = this.selectedTime!.toLocaleTimeString('en-US', options);
  
    // Create the payload for the API
    const addtime = {
      email: this.currentMerchant.email,
      time: this.formattedTime,
      date:this.selectedDay
    };

    // console.log(this.selectedDate?.getDay())
    console.log(addtime)
  
    // Send the formatted time to the service
    this.merchantService.addAvailability(addtime).subscribe(
      (response) => {
        console.log('Availability added successfully:', response);
        window.location.reload(); // Refresh the page
      }
      // (error) => {
      //   console.error('Error adding availability:', error);
      //   alert('An error occurred while adding availability. Please try again.');
      // }
    );
    // window.location.reload(); // Refresh the page


  
  }



  // addAvailability(){
  //   if (this.selectedDate ) {
  //     alert(`You selected ${this.selectedDate.getDay()}`);
  //   } else {
  //     alert('Please select a date and time slot.');
  //   }
  // }
  
  viewAvailability() {
    this.merchantService.getAvailability(this.currentMerchant.id).subscribe(data => {
      
      // if(data){
      //   this.time = data
      //   console.log(this.time)
        
          

      //     this.items = this.time.map((item: { date: string; time: string[] }) => ({
      //   label: `${item.date}`, // The date as the main label
      //   items: item.time.map((timeSlot: string) => ({
      //     label: timeSlot, // Each time slot as an individual item
      //   }))
      // }));
      
      //   console.log(this.items)

       
        
      // }

      if(data){
        this.time=data
        this.time.map((item:{date: string;time: string[]})=>{
          console.log(item.date)
          if(item.date == "Sunday"){
            this.sunday=item.time
          }
          if(item.date == "Monday"){
            this.monday=item.time
          }
          if(item.date == "Tuesday"){
            this.tuesday=item.time
          }if(item.date == "Wednesday"){
            this.wednesday=item.time
          }if(item.date == "Thursday"){
            this.thursday=item.time
          }if(item.date == "Friday"){
            this.friday=item.time
          }
          if(item.date == "Saturday"){
            this.saturday=item.time
          }
        })
      }
      console.log(this.sunday)
      console.log(this.monday)
      console.log(this.tuesday)
      console.log(this.wednesday)
      console.log(this.thursday)
      console.log(this.friday)
      console.log(this.saturday)
      // console.log(this.monday)
     

    })
    
  }

  deleteAvailability(element:any, date:any) {
    let selectedDate = {
      // merchantId:this.currentMerchant.id,
      date:date,
      time: element
      
    };
    // console.log(selectedDate)
    console.log(selectedDate)
    
    this.merchantService.deleteAvailability(this.currentMerchant.id,selectedDate.date,selectedDate.time).subscribe(response=>{
      window.location.reload()
      console.log(response)

    })
  }

  // confirmSelection(): void {
  //   if (this.selectedTime) {
  //     // Format the time into HH:mm or hh:mm a
  //     const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
  //     this.formattedTime = this.selectedTime.toLocaleTimeString('en-US', options);
      
  //     // Log or send the formatted time
  //     console.log('Formatted Time:', this.formattedTime);
  //   }
  //   else {
  //     alert('Please select a date and time slot.');
  //   }
  // }
}
