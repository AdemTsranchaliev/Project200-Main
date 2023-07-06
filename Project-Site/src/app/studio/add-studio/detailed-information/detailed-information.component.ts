import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Studio } from 'src/app/shared/models/studio/studio.model';
import { WorkingTime } from 'src/app/shared/models/studio/working-time.model';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.css'],
})
export class DetailedInformationComponent implements OnInit {
  @Input() model: Studio = new Studio();
  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();

  public workingTime: string[] = [];
  public workingDays: WorkingTime[] = [
    new WorkingTime(9,0,17,0,1),
    new WorkingTime(9,0,17,0,2),
    new WorkingTime(9,0,17,0,3),
    new WorkingTime(9,0,17,0,4),
    new WorkingTime(9,0,17,0,5),
    new WorkingTime(9,0,17,0,6),
    new WorkingTime(9,0,17,0,7)
  ];

  public mainInformationForm = this._formBuilder.group({
    salonInformation: [
      '',
      [
        Validators.required,
        Validators.minLength(60),
        Validators.maxLength(400),
      ],
    ],
    slogan: ['', [Validators.minLength(10), Validators.maxLength(80)]],
  });

  constructor(
    private _formBuilder: FormBuilder,
    public commonService: CommonService
  ) {}

  ngOnInit(): void {
    //this.model.workingTime = this.workingDays;
    for (let i = 0; i < 24; i++) {
      if (i >= 0 && i < 10) {
        this.workingTime.push(`0${i}:00`);
        this.workingTime.push(`0${i}:30`);
      } else {
        this.workingTime.push(`${i}:00`);
        this.workingTime.push(`${i}:30`);
      }
    }
    window.scrollTo(0, 0);
  }

  public onSubmit() {}

  public nextPage() {
    this.nextPageEvent.next();
  }
  public previousPage() {
    this.previousPageEvent.next('');
  }
}
