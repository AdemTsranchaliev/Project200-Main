import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OblastModel } from 'src/app/shared/models/EkkateModels/oblast.model';
import { CommonService } from 'src/app/shared/services/common.service';
import { Studio } from 'src/app/shared/models/studio/studio.model';
import { Coordinates } from 'src/app/shared/models/studio/coordinates.model';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css'],
})
export class BasicInformationComponent implements OnInit {
  @Input() model: Studio = new Studio();
  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();

  public offeredServices: string[] = [
    'Маникюр',
    'Лазерна епилация',
    'Фризъорски салон',
    'Подстрижка',
  ];

  oblasti: OblastModel[] = [];

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

  public nextPage() {
    this.nextPageEvent.next('');
  }
  public previousPage() {
    this.previousPageEvent.next('');
  }

  public onSubmit() {}

  public addServiceHadnler(addedServices: string[]) {
    this.model.tags = addedServices;
  }
  public addedAreaHandler(area: string) {
    this.model.address.area = area;
  }
  public addedTownHandler(town: string) {
    this.model.address.town = town;
  }
  public setMapCoordinates($event: Coordinates) {
    this.model.coordinates = $event;
  }
}
