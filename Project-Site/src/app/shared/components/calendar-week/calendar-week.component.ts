// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.css']
})
export class CalendarWeekComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;

  displayedColumns: string[] = ['hours', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  dataSource = [
    { hours: '08:00', monday: 'asdasd', tuesday: 'qweqwe', wednesday: '', thursday: '', friday: '4983', saturday: '', sunday: '' },
    { hours: '09:00', monday: 'asdasd', tuesday: 'qweqwe', wednesday: '', thursday: '', friday: '4983', saturday: '', sunday: '' },
    { hours: '10:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
    { hours: '11:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
    { hours: '12:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
    { hours: '13:00', monday: 'asdasd', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
    { hours: '14:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
    { hours: '15:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
    { hours: '16:00', monday: 'asdasd', tuesday: 'qweqwe', wednesday: '234234', thursday: '', friday: '', saturday: '', sunday: '' },
    { hours: '17:00', monday: '', tuesday: 'qweqwe', wednesday: '234234', thursday: 'sf/6', friday: '', saturday: '', sunday: '' },
    { hours: '18:00', monday: 'asdasd', tuesday: 'qweqwe', wednesday: '234234', thursday: 'sf/6', friday: '', saturday: '', sunday: '' }
  ];

  constructor() { }

  ngOnInit(): void { }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
