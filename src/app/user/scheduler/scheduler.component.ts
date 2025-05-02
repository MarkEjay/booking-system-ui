import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { MerchantService } from 'src/app/merchant/merchant.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  selectedDate: Date | null = null;
  selectedTimeSlot: string | null = null;
  selectedTime: string | null = null;
  merchantid: any;
ser:any;
days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Sarturday']
  timeSlots: string[] = [];

  constructor(private merchantService: MerchantService, private authToken: AuthenticationService,private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    // this.merchantid = this.activatedRoute.snapshot.paramMap.get('id');
    this.merchantid='67626d2bdeb42dfa103d93e6'
   console.log(this.merchantid)
  //  this.getTime("Sunday")
  // console.log(this.timeSlots)

  }
  onDateChange(date: Date): void {
    this.selectedDate = date;
    // console.log(this.days[this.selectedDate.getDay()])
    // this.getTime()
    this.getTime(this.days[this.selectedDate.getDay()])

    // if(this.selectedDate.getDay() === 1){
    //   console.log('muday')
    // }
  }

  selectTimeSlot(slot: string): void {
    this.selectedTimeSlot = slot;
  }
  selectedTimes(time: string): void {
    this.selectedTime = time;
  }

  getTime(day:any){
    this.merchantService.getAvailability(this.merchantid).subscribe(data=>{
      this.ser=data
      // console.log(this.ser)
      // console.log(this.ser[0].date)
      this.timeSlots=[]
      this.selectedTimeSlot=""

      this.ser.forEach((item: { date: string; time:[string]}) => {


        // console.log(item.date); // Logs each date
        if (item.date == day) {

          // console.log(item.time)
          // item.time.forEach(element => {
          //   console.log(element)
          //   this.timeSlots.push(element)

          // });
          if (item.date === day) {
            // Push matching time slots to the array
            this.timeSlots.push(...item.time);
          }
          
          // this.timeSlots.push(item.time)
        }
        // else if(item.date !=day){
        //   this.timeSlots=[]
        // }
      });
    })
  }

  confirmSelection(): void {
    if (this.selectedDate && this.selectedTimeSlot) {
//       const selectedDate = this.selectedDate; // Example: "Sun Jan 21 2025"
// const selectedTimeSlot = this.selectedTimeSlot; // Example: "4:30 PM"

// // Combine the date and time into one string
// const dateTimeString = `${selectedDate.toDateString()} ${selectedTimeSlot}`;
// console.log(dateTimeString)


// // Parse the combined string into a Date object
// const dateObject = new Date(dateTimeString);

// // Convert the Date object to an ISO string
// const isoDate = dateObject.toISOString();
// console.log(isoDate)

const dateString = this.selectedDate.toDateString(); // Example: "Sat Jan 20 2025"
  const timeString = this.selectedTimeSlot;           // Example: "4:00 PM"

  // Combine date and time into a single string
  const combinedDateTime = `${dateString} ${timeString}`;

  // Parse the combined string into a Date object
  const date = new Date(combinedDateTime);

  if (isNaN(date.getTime())) {
    console.error('Invalid date or time format.');
    // return null;
  }

  // Convert to ISO string in local time
  const localISODate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();


console.log("ISO Date:", localISODate);
      alert(`You selected ${this.selectedDate.toDateString()} at ${this.selectedTimeSlot}`);
    } else {
      alert('Please select a date and time slot.');
    }
  }
}
