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

  // Store temporary the selected event
  currentSelectedInfo: DateSelectArg;

  // Collect All Events
  currentEvents: EventApi[] = [];

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
    firstDay: 1,
    locale: 'bg',
    buttonText: {
      today: 'Днес',
      month: 'Месец',
      week: 'Седмица',
      day: 'Ден',
    },
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.prepareViewToCreateEvent.bind(this),
    eventClick: this.prepareToEditEvent.bind(this),
    eventsSet: this.handleCollectEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  constructor(
    private changeDetector: ChangeDetectorRef,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    // Subscribe to the breakpoint observer
    const sizeSubscription = this.isExtraSmall.subscribe(isXSmall => {
      // Update the FullCalendar options based on the screen size
      this.updateCalendarOptions(isXSmall.matches);
    });
    this.subscriptions.push(sizeSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((el) => el.unsubscribe());
  }

  /**
   * Update the calendar options based on whether it's mobile or not
   * @param isMobile 
   */
  private updateCalendarOptions(isMobile: boolean) {
    if (isMobile) {
      // Do Something - Change Style
      // .fc .fc-toolbar-title { display: none }
    } else {
      // Do Something - Change Style
      // .fc .fc-toolbar-title { display: block }
    }
  }

  /**
   * This Method prepares Event to be Updated
   * @param  clickInfo
   */
  prepareToEditEvent(clickInfo: EventClickArg) {
    const currentEvent = {
      title: clickInfo.event.title,
      procedure: clickInfo.event.extendedProps.procedure,
      clientPhone: clickInfo.event.extendedProps?.clientPhone,
      start: clickInfo.event.start,
      end: clickInfo.event.end,
    };

    this.openDialogToEditEvent(clickInfo, currentEvent);
  }

  handleCollectEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }

  /**
   * This Method prepares View and to Create Event
   * @param  selectInfo
   */
  prepareViewToCreateEvent(selectInfo: DateSelectArg) {
    const calendarApi = selectInfo.view.calendar;
    const currentView = calendarApi.view.type;

    if (currentView === 'timeGridWeek' || currentView === 'timeGridDay') {
      this.openDialogToCreateEvent(calendarApi, selectInfo);
    } else if (currentView === 'dayGridMonth') {
      // Redirect to day view when in the month view
      const dayViewDate = selectInfo.start;
      calendarApi.changeView('timeGridDay', dayViewDate); // Change to 'timeGridDay' or whichever day view you prefer
    }
  }

  /**
   * This Method opens Modal Component.
   * After success creates new Event.
   * @param  calendarApi
   * @param  selectInfo
   */
  openDialogToCreateEvent(calendarApi, selectInfo) {
    // Dialog configuration
    const dialogConfig: MatDialogConfig = {
      width: '50%'
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

      if (result && result._status == 'create') {
        calendarApi.addEvent({
          id: createEventId(),
          title: result.clientName,
          extendedProps: {
            procedure: result.procedure,
            clientPhone: result?.clientPhone,
          },

          start: selectInfo.startStr,
          end: selectInfo.endStr
        });
      }
    });
  }

  /**
  * This Method opens Modal Component & pass data to it.
  * After success edits current Event.
  * @param  clickInfo
  * @param  currentEvent
  */
  openDialogToEditEvent(clickInfo, currentEvent) {
    // Dialog configuration
    const dialogConfig: MatDialogConfig = {
      width: '50%',
      data: currentEvent
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

      // Update the current event with the new values from the modal

      if (result && result._status == 'edit') {
        clickInfo.event.setProp('title', result.clientName);
        clickInfo.event.setExtendedProp('procedure', result.procedure);
        clickInfo.event.setExtendedProp('clientPhone', result.clientPhone);
      }

      // Condition to remove event
      if (result.delete == true) {
        clickInfo.event.remove();
      }
    });
  }
}
