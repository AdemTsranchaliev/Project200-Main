// Angular
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
// RXJS
import { Subscription, Observable } from 'rxjs';
// Components
import { HeaderSearchModalComponent } from '../modals/header-search-modal/header-search-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Modal Size Variable
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);

  // Mobile Size Variable
  isMobile: Observable<BreakpointState>;

  // Search Input
  headerSearchData: string;

  // Check View Port
  isMobileViewCheck: boolean = false;

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isMobile = this.breakpointObserver.observe('(max-width: 991px)');
  }

  ngOnInit(): void {
    // Subscribe to the breakpoint observer
    const sizeSubscription = this.isMobile.subscribe(isSamller => {
      // Update the FullCalendar options based on the screen size
      this.updateCalendarViewPort(isSamller.matches);
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
  private updateCalendarViewPort(isMobile: boolean) {
    this.isMobileViewCheck = isMobile;
  }

  // ================= BUG -> When search button is clicked, opens new window on top of the existing =================
  // ================= Need to open only one Window! =================

  /**
  * This Method opens Modal Component & passing data to it
  */
  openDialog() {
    const dialogRef = this.dialog.open(HeaderSearchModalComponent, {
      data: this.headerSearchData,
      width: '50%'
    });

    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        dialogRef.updateSize('90%');
      } else {
        dialogRef.updateSize('50%');
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      smallDialogSubscription.unsubscribe();
    });
  }
}
