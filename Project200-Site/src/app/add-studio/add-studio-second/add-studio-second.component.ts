import { Time } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-add-studio-second',
  templateUrl: './add-studio-second.component.html',
  styleUrls: ['./add-studio-second.component.css'],
})
export class AddStudioSecondComponent implements OnInit {
  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();
  time = {hour: 13, minute: 30};

  mainInformationForm = this._formBuilder.group({
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
    this.generateTimes();
    window.scrollTo(0, 0);
  }

  generateTimes() {
    for (let i = 0; i <= 86400; i += 1800) {
      // this.availableTimes.push(this.secondsToHms(i));
    }
  }
  secondsToHms(d: number) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);

    var hDisplay = h > 0 ? h + (h == 0 ? '0' : '') : '00';
    var mDisplay = m > 0 ? m + (m == 0 ? '0' : '') : '00';
    return hDisplay + ':' + mDisplay;
  }
  nextPage() {
    this.nextPageEvent.next('test 1 2 3 4 5 6 7 ');
  }
  previousPage() {
    this.previousPageEvent.next('');
  }

  onSubmit() {}
}
