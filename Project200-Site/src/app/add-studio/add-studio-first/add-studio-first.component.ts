import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { OblastModel } from 'src/app/shared/models/EkkateModels/oblast.model';
import { CommonService } from 'src/app/shared/services/common.service';

declare var $: any;

@Component({
  selector: 'app-add-studio-first',
  templateUrl: './add-studio-first.component.html',
  styleUrls: ['./add-studio-first.component.css'],
})
export class AddStudioFirstComponent implements OnInit {
  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();

  public offeredServices: string[] = [
    'Маникюр',
    'Лазерна епилация',
    'Фризъорски салон',
    'Подстрижка',
  ];

  oblasti: OblastModel[] = [];
  mainInformationForm = this._formBuilder.group({
    salonName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(40)],
    ],
    services: [[], [Validators.required]],
    city: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    postCode: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(4),
        Validators.maxLength(4),
      ],
    ],
    street: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(60)],
    ],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    public commonService: CommonService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.http.get<OblastModel[]>('api/obl.json').subscribe((x) => {
      this.oblasti = x;
    });
  }
  onMapReady() {}

  nextPage() {
    this.nextPageEvent.next('');
  }
  previousPage() {
    this.previousPageEvent.next('');
  }

  onSubmit() {}

  addServiceHadnler(addedServices: string[]) {
    console.log(addedServices);
  }
  addedAreaHandler(area: string) {
    console.log(area);
  }
}
