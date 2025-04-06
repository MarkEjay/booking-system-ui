import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserService } from '../user.service';
import { MerchantService } from 'src/app/merchant/merchant.service';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent implements OnInit {

  localISODate: any
  selectedDate: Date | null = null;
  selectedTimeSlot: string | null = null;
  selectedTime: string | null = null;
  merchantids: any;
  isoDate: any
  ser: any;
  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sarturday']
  timeSlots: string[] = [];
  //userid:any;
  merchantid = new FormControl('');
  companyname=new FormControl('')
  created = new FormControl('');
  appointment = new FormControl('');
  phoneno = new FormControl('')
  guestemail = new FormControl('')
  guestfname = new FormControl('')
  guestlname = new FormControl('')
  // date=new FormControl('');
  // time=new FormControl('');

  description = new FormControl('');
  status = new FormControl();
  user: any;
  guest: any;
  // email=new FormControl();

  //  public date = new Date('2023-05-09T21:00:00.000Z');
  //  public time = new Date().getTime()

  currentUser: any;
  loggedUser: any

  // time =new Date();

  currentDate = new Date();
  details = '';
  usrEmail = '';

  actionBtn: string = "Save"
  // activatedRoute: any;
  // declineBtn:string="Decline"
  constructor(@Inject(MAT_DIALOG_DATA) public bookService: any, private authToken: AuthenticationService, private userService: UserService, private merchantService: MerchantService, private dialogRef: MatDialogRef<UserRequestComponent>, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    // this.merchantids='67626d2bdeb42dfa103d93e6'
    //     this.merchantids = this.activatedRoute.snapshot.paramMap.get('id');
    //  console.log(this.merchantids)


    // if(this.authToken.getUser()){
    //   this.currentUser=this.authToken.getUser()
    // // if(this.editRequest){
    // //   this.actionBtn="Approve"
    // //   this.created.setValue(this.editRequest.created)
    // //   this.appointment.setValue(this.editRequest.appointment)
    // //   this.description.setValue(this.editRequest.description)
    // //   this.status.setValue(this.editRequest.status)

    // console.log(this.currentUser)

    // // console.log(this.time)
    // // }
    // console.log(this.bookService.merchantid)
    // this.details = `${this.bookService.title} for CA$${this.bookService.price} `

    // this.getUser()
    // }

    // this.currentUser = this.authToken.getUser();
    this.currentUser = this.authToken.getToken()

    if (this.currentUser) {
      this.loggedUser = this.authToken.getUser()
      console.log(this.loggedUser.firstname)
      // console.log('Logged in as:', this.currentUser);
      this.getUser();
    } else {
      // console.log('Operating as a guest');
    }

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

  getTime(day: any) {
    console.log(this.bookService.uniqueId)
    this.merchantService.getAvailability(this.bookService.uniqueId).subscribe(data => {
      this.ser = data
      // console.log(this.ser)
      // console.log(this.ser[0].date)
      this.timeSlots = []
      this.selectedTimeSlot = ""

      this.ser.forEach((item: { date: string; time: [string] }) => {


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
      const selectedDate = this.selectedDate; // Example: "Sun Jan 21 2025"
      const selectedTimeSlot = this.selectedTimeSlot; // Example: "4:30 PM"

      // Combine the date and time into one string
      const dateTimeString = `${selectedDate.toDateString()} ${selectedTimeSlot}`;

      // Parse the combined string into a Date object
      const dateObject = new Date(dateTimeString);

      // Convert the Date object to an ISO string
      const isoDate = dateObject.toISOString();
      console.log(isoDate)

      console.log("ISO Date:", isoDate);
      alert(`You selected ${this.selectedDate.toDateString()} at ${this.selectedTimeSlot}`);
    } else {
      alert('Please select a date and time slot.');
    }
  }











  sendRequest() {


    // let rqst={

    //   userid: this.currentUser.id,
    //   // useremail:this.currentUser.email,
    //   useremail:this.usrEmail,

    //   merchantid: this.bookService.merchantid,
    //   created: this.currentDate,
    //   // appointment:`${this.date.value}T${this.time.value}:00.000`,
    //   appointment:this.appointment.value,
    //   description:this.bookService.title,
    //   status:"pending"
    // }
    
    if (this.selectedDate && this.selectedTimeSlot) {
      //       const selectedDate = this.selectedDate; // Example: "Sun Jan 21 2025"
      // const selectedTimeSlot = this.selectedTimeSlot; // Example: "4:30 PM"

      // // Combine the date and time into one string
      // const dateTimeString = `${selectedDate.toDateString()} ${selectedTimeSlot}`;

      // // Parse the combined string into a Date object
      // const dateObject = new Date(dateTimeString);

      // // Convert the Date object to an ISO string
      //  this.isoDate = dateObject.toISOString();
      // console.log(this.isoDate)



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
      this.localISODate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();



      console.log("ISO Date:", this.localISODate);
      alert(`You selected ${this.selectedDate.toDateString()} at ${this.selectedTimeSlot}`);
    } else {
      alert('Please select a date and time slot.');
    }
    const rqst = {
      userid: this.loggedUser?.id || 'guest-0000', // Use currentUser ID if logged in, else use guest ID
      useremail: this.loggedUser?.email || this.usrEmail.valueOf(), // Use logged-in email or form email for guest
      firstname: this.loggedUser.firstname,
      lastname: this.loggedUser.lastname,
      phoneno: this.loggedUser.phone,
      merchantid: this.bookService.merchantid,
      companyname:this.bookService.companyname,
      created: this.currentDate,
      // appointment: this.appointment.value,
      appointment: this.localISODate,
      //description <-> tittle
      description: this.bookService.title,
      status: 'pending'
    };

    // console.log(this.loggedUser)
    // console.log(this.phoneno.value)
    // console.log(this.bookService)
    // console.log(rqst)
    // console.log(rqst.appointment)
    // console.log( new Date(rqst.appointment))
    this.userService.addRequest(rqst).subscribe(Response => {
      // window.location.reload()
      console.log(rqst)
    })
  }
  sendRequestAsGuest() {
    console.log(this.guestfname.value)

    // if(!this.guestfname.value){
    //   alert("Please input your first name")
    // }
    if (this.selectedDate && this.selectedTimeSlot && this.guestfname.value && this.guestemail.value) {
      //       const selectedDate = this.selectedDate; // Example: "Sun Jan 21 2025"
      // const selectedTimeSlot = this.selectedTimeSlot; // Example: "4:30 PM"

      // // Combine the date and time into one string
      // const dateTimeString = `${selectedDate.toDateString()} ${selectedTimeSlot}`;

      // // Parse the combined string into a Date object
      // const dateObject = new Date(dateTimeString);

      // // Convert the Date object to an ISO string
      //  this.isoDate = dateObject.toISOString();
      // console.log(this.isoDate)



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
      this.localISODate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();



      console.log("ISO Date:", this.localISODate);
      alert(`You selected ${this.selectedDate.toDateString()} at ${this.selectedTimeSlot}`);
      let rqst = {

        userid: "guest-0000",
        // useremail:this.currentUser.email,
        useremail: this.guestemail.value,
        firstname: this.guestfname.value,
        lastname: this.guestlname.value,
        phoneno: this.phoneno.value,
  
        merchantid: this.bookService.merchantid,
        companyname:this.bookService.companyname,
        created: this.currentDate,
        // appointment:`${this.date.value}T${this.time.value}:00.000`,
        appointment: this.localISODate,
        description: this.bookService.title,
        status: "pending"
      }
  
      console.log(rqst)
      
      this.userService.addRequest(rqst).subscribe(Response => {
        window.location.reload()
      })
    } else {
      alert('Please select all required fields');
    }

    
    // let rqst = {

    //   userid: "guest-0000",
    //   // useremail:this.currentUser.email,
    //   useremail: this.guestemail.value,
    //   firstname: this.guestfname.value,
    //   lastname: this.guestlname.value,
    //   phoneno: this.phoneno.value,

    //   merchantid: this.bookService.merchantid,
    //   created: this.currentDate,
    //   // appointment:`${this.date.value}T${this.time.value}:00.000`,
    //   appointment: this.localISODate,
    //   description: this.bookService.title,
    //   status: "pending"
    // }

    
    // this.userService.addRequest(rqst).subscribe(Response => {
    //   window.location.reload()
    // })

    // console.log(this.phoneno.value)
  }

  getUser() {
    this.userService.getUser(this.loggedUser.id).subscribe(
      usr => {
        // console.log(usr)
        this.user = usr
        this.usrEmail = this.user.email

        // console.log(usr)
        //  console.log(this.user.email)
      }
    )
    // console.log(this.currentUser.id)

  }
}
