import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { CalendarOptions, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  calendarOptions: CalendarOptions;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;

  ngOnInit() {
    // need for load calendar bundle first
  forwardRef(() => Calendar);

    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      editable: true,
      // customButtons: {
      //   myCustomButton: {
      //     text: 'custom!',
      //     click: function () {
      //       alert('clicked the custom button!');
      //     }
      //   }
      // },
      headerToolbar: {
        left: '',
        center: 'title',
        right: 'prev,next'
      },
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventDragStop: this.handleEventDragStop.bind(this),
      // events: this.calendarOptions.events
    };
  }

  handleDateClick(arg) {
    console.log(arg);
  }

  handleEventClick(arg) {
    console.log(arg);
  }

  handleEventDragStop(arg) {
    console.log(arg);
  }

  updateHeader() {
    this.calendarOptions.headerToolbar = {
      left: '',
      center: 'title',
      right: 'prev,next'
    };
  }

  updateEvents() {
    const nowDate = new Date();
    const yearMonth = nowDate.getUTCFullYear() + '-' + (nowDate.getUTCMonth() + 1);

    this.calendarOptions.events = [{
      title: 'Updated Event',
      // start: yearMonth + '-08',
      // end: yearMonth + '-10'
      start: '2021-10-20',
      end: '2021-10-20'
    }];
  }

}
