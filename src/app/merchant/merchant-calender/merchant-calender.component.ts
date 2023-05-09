import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


import { AuthenticationService } from 'src/app/authentication.service';
import { MerchantService } from '../merchant.service';
@Component({
  selector: 'app-merchant-calender',
  templateUrl: './merchant-calender.component.html',
  styleUrls: ['./merchant-calender.component.css']
})


export class MerchantCalenderComponent implements OnInit {


  currentUser: any;

  trial: any = [];
  events: any = [];
  // day="2023-05-09"
  // // time="T21:00:00.000Z"
  // time="T13:30:00.000"

  constructor(private changeDetector: ChangeDetectorRef, private merchantService: MerchantService, private authToken: AuthenticationService) { }
  ngOnInit(): void {
    this.currentUser = this.authToken.getUser()
    this.Bookings();
    //  console.log(this.trial)
    // this.events.push({
    //   title:"hello",
    //   // date:"2023-05-09T21:00:00.000Z",
    //   // day:"2023-05-09",
    //   // time:"T21:00:00.000Z"
    //   date:`${this.day}${this.time}`
    //   // end:"2023-04-22T22:30:00.000Z"

    // })
    // console.log(this.events)
    //console.log(`approved${this.approved}`)

  }
  calendarOptions: CalendarOptions = {
    //initialView: 'dayGridMonth',
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    events:this.events,
    selectable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
  };


  Bookings() {
    let $requestEvents: any = [];
    this.merchantService.getRequest(this.currentUser.merchantid).subscribe(data => {
      for (const i of data.request) {
        if (i.status == "approved") {
          $requestEvents.push({ title: i.description, date: i.appointment })
        }
      }

      this.events.push($requestEvents);

      this.trial = this.events[0]

      this.calendarOptions.events = this.trial
      // console.log(this.calendarOptions.events)
    })

  }
}
