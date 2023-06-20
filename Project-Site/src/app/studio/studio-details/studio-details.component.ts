import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewModalComponent } from 'src/app/shared/components/modals/review-modal/review-modal.component';
import { Studio } from 'src/app/shared/models/studio/studio.model';
import { WorkingTime } from 'src/app/shared/models/studio/working-time.model';

@Component({
  selector: 'app-studio-details',
  templateUrl: './studio-details.component.html',
  styleUrls: ['./studio-details.component.css'],
})
export class StudioDetailsComponent implements OnInit {
  public studio: Studio = new Studio();
  public workingTime: WorkingTime[] = [];
  public similar: any[] = [];

  public daysOfWeek: string[] = [
    'Понеделник',
    'Вторник',
    'Сряда',
    'Четвъртък',
    'Петък',
    'Събота',
    'Неделя',
  ];
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.http
      .get<Studio>('assets/API/studio/studio-details.json')
      .subscribe((x) => {
        this.studio = x;
        this.workingTime = x.workingTime;
      });

    this.http.get<any[]>('assets/API/catalog/catalog.json').subscribe((x) => {
      this.similar = x;
    });
  }

  public getWorkingHourByDay(dayOfWeek: number): WorkingTime[] {
    let result: WorkingTime[] = this.workingTime.filter((x) => {
      return x.dayOfWeek === dayOfWeek;
    });

    return <WorkingTime[]>result;
  }

  public getWorkingTimePresentation(time: Date): string {
    let date = new Date(time);
    if (date) {
      return this.formatTimeToHHMM(date.getHours(), date.getMinutes());
    }

    return null;
  }

  public isCurrentTimeInRangeAndDayOfWeek(
    startTime: Date,
    endTime: Date,
    targetDayOfWeek: number
  ): boolean {
    const currentTime = new Date();
    const currentDayOfWeek = currentTime.getDay();

    const isTimeInRange = currentTime >= startTime && currentTime <= endTime;
    const isDayOfWeekMatch = currentDayOfWeek === targetDayOfWeek;

    return isTimeInRange && isDayOfWeekMatch;
  }

  public openDialog() {
    const dialogRef = this.dialog.open(ReviewModalComponent, {
      data: this.studio.reviews,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private formatTimeToHHMM(hour: number, minute: number): string {
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute}`;
  }
}
