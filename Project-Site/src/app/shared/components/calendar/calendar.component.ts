// Angular
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
// RXJS
import { Subscription, Observable } from 'rxjs';
// Services
import { CalendarViewService } from '../../services/calender-view.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Week Days for Calendar
  weekDays: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

  // Get Current Date
  currentDate: Date = new Date();

  // Days Colection
  calendarDays: Date[] = [];

  // Storage for Event of the Day
  events: { [key: string]: string[] } = {};

  componentToRender: number;

  // Modal Size Variable
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private calendarViewService: CalendarViewService
  ) { }

  ngOnInit(): void {
    // Init Calendar
    this.generateCalendar();
    // Get Needed Calendar Schedule View
    this.manageCalendarView();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((el) => el.unsubscribe());
  }

  /**
   * This Method Generate the Calendar
   */
  generateCalendar(): void {
    const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    const prevMonthLastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0).getDate();

    const startDay = firstDayOfMonth.getDay();
    const endDay = lastDayOfMonth.getDate();
    const totalDays = startDay + endDay;

    this.calendarDays = [];

    for (let i = startDay - 1; i >= 0; i--) {
      this.calendarDays.push(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, prevMonthLastDay - i));
    }

    for (let i = 1; i <= endDay; i++) {
      this.calendarDays.push(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i));
    }

    const remainingDays = 42 - totalDays;

    for (let i = 1; i <= remainingDays; i++) {
      this.calendarDays.push(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, i));
    }
  }

  manageCalendarView() {
    this.calendarViewService.getComponentToRender().subscribe((shouldRender) => {
      this.componentToRender = shouldRender;
    });
  }

  renderComponent(componentNumber: number) {
    this.calendarViewService.updateComponentToRender(componentNumber);
  }

  /**
   * This Method Check is the Clicked Day, Today
   * @param date 
   * @returns 
   */
  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  }

  /**
   * This Method Checks if the Current Clicked Day Has ONE event, if not, Creates Event for the Day
   * @param day 
   * @returns 
   */
  hasEvent(day: Date): boolean {
    return !!this.events[day.toISOString()]; // Return true if an event exists for the day
  }

  /**
   * This Method Checks if we are in the Current Month
   * @param date 
   * @returns 
   */
  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.currentDate.getMonth() && date.getFullYear() === this.currentDate.getFullYear();
  }

  /**
   * This Method Changes to Previous Month
   */
  prevMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.generateCalendar();
  }

  /**
   * This Method Changes to Next Month
   */
  nextMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.generateCalendar();
  }
}
