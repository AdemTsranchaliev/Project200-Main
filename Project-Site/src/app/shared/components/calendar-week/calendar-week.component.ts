// Angular
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.css']
})
export class CalendarWeekComponent implements OnInit {

  weekDays: string[] = ['Час', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

  dataSource = [
    { today: '' },
    { today: 'sdf' },
    { today: '6848' },
    { today: '' },
    { today: 'qwecvgsdfr' },
    { today: '234dwf' },
    { today: '' },
    { today: '87' },
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

  // TESTING

  monday = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  tuesday = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  wednesday = ['Not up', 'DAMN teeth', 'Dontasdasd a shower', 'Beg e-mail', 'Walk bricK'];
  thursday = ['Not up', 'DAMN teeth', 'Dontasdasd a shower', 'Beg e-mail', 'Walk bricK'];
  friday = ['Not up', 'DAMN teeth', 'Dontasdasd a shower', 'Beg e-mail', 'Walk bricK'];
  saturday = ['Not up', 'DAMN teeth', 'Dontasdasd a shower', 'Beg e-mail', 'Walk bricK'];
  sunday = ['Not up', 'DAMN teeth', 'Dontasdasd a shower', 'Beg e-mail', 'Walk bricK'];



  schedules: any[] = [
    [{ hours: '08:00' },
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
    ], // Hour column
    [{ today: '' },
    { today: 'sdf' },
    { today: '6848' },
    { today: '' },
    { today: 'qwecvgsdfr' },
    { today: '234dwf' },
    { today: '' },
    { today: '87' },
    { today: 'asdasd' },
    { today: '' },
    { today: '687' }], // Monday column
    [{ today: '' },
    { today: 'sdf' },
    { today: '6848' },
    { today: '' },
    { today: 'qwecvgsdfr' },
    { today: '234dwf' },
    { today: '' },
    { today: '87' },
    { today: 'asdasd' },
    { today: '' },
    { today: '687' }], // Tuesday column
    [{ today: '' },
    { today: 'sdf' },
    { today: '6848' },
    { today: '' },
    { today: 'qwecvgsdfr' },
    { today: '234dwf' },
    { today: '' },
    { today: '87' },
    { today: 'asdasd' },
    { today: '' },
    { today: '687' }], // Wednesday column
    [], // Thursday column
    [], // Friday column
    [], // Saturday column
    []  // Sunday column
  ];


  constructor() { }

  ngOnInit(): void { }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
