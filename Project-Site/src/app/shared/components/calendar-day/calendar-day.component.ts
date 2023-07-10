// Angular
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {

  dataSource = [
    { today: 'sdfg' },
    { today: 'asdasd' },
    { today: '' },
    { today: '' },
    { today: '' },
    { today: '234dwf' },
    { today: '' },
    { today: '' },
    { today: 'asdasd' },
    { today: '' },
    { today: '687' }
  ];

  hours = [
    { hours: '08:00' },
    { hours: '09:00' },
    { hours: '10:00' },
    { hours: '11:00' },
    { hours: '12:00' },
    { hours: '13:00' },
    { hours: '14:00' },
    { hours: '15:00' },
    { hours: '16:00' },
    { hours: '17:00' },
    { hours: '18:00' }
  ];

  constructor() { }

  ngOnInit(): void { }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
  }
}
