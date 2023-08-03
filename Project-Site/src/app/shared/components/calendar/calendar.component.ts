// Angular
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
// RXJS
import { Subscription, Observable } from 'rxjs';
// Components
import { CalendarEventModalComponent } from '../modals/calendar-event-modal/calendar-event-modal.component';
// Full Calendar
import { CalendarOptions, EventClickArg, EventApi, DateSelectArg } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import { INITIAL_EVENTS, createEventId } from './event-utils';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Modal Size Variable
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);

  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    allDaySlot: false,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.openDialog.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  currentEvents: EventApi[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subscriptions.forEach((el) => el.unsubscribe());
  }

  handleDateSelect(selectInfo: DateSelectArg, eventData) {
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (eventData) {
      calendarApi.addEvent({
        id: createEventId(),
        title: eventData.clientName,
        start: selectInfo.startStr,
        end: selectInfo.endStr
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }

  /**
   * This Method opens Modal Component & passing data to it
   */
  openDialog(selectInfo: DateSelectArg) {
    // Dialog configuration
    const dialogConfig: MatDialogConfig = {
      width: '50%',
    };

    const dialogRef = this.dialog.open(CalendarEventModalComponent, dialogConfig);

    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        dialogRef.updateSize('90%');
      } else {
        dialogRef.updateSize('50%');
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      smallDialogSubscription.unsubscribe();

      if (result) {
        this.handleDateSelect(selectInfo, result);
      }
    });
  }
}
