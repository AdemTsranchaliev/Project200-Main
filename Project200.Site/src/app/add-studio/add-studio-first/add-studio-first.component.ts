import { HttpClient } from "@angular/common/http";
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import * as Leaflet from "leaflet";
import * as L from "leaflet";
import { OperatorFunction, Observable } from "rxjs";
import { OblastModel } from "src/app/shared/models/EkkateModels/oblast.model";
import { map, startWith } from "rxjs/operators";
import { CommonService } from "src/app/shared/services/common.service";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";

declare var $: any;

@Component({
  selector: "app-add-studio-first",
  templateUrl: "./add-studio-first.component.html",
  styleUrls: ["./add-studio-first.component.css"],
})
export class AddStudioFirstComponent implements OnInit {
  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();

  public offeredServices: string[] = [
    "Маникюр",
    "Лазерна епилация",
    "Фризъорски салон",
    "Подстрижка",
  ];

  oblasti: OblastModel[] = [];
  mainInformationForm = this._formBuilder.group({
    salonName: [
      "",
      [Validators.required, Validators.minLength(2), Validators.maxLength(40)],
    ],
    services: [[], [Validators.required]],
    city: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    postCode: [
      "",
      [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(4),
        Validators.maxLength(4),
      ],
    ],
    street: [
      "",
      [Validators.required, Validators.minLength(4), Validators.maxLength(60)],
    ],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    public commonService: CommonService
  ) {

  }

  public map: Leaflet.Map | undefined | any;
  theMarker = {};

  ngOnInit(): void {
    window.scrollTo(0, 0);

    // this.map = Leaflet.map("add-studio-map").setView(
    //   [42.67510859030425, 25.877197156660262],
    //   7
    // );
    // Leaflet.tileLayer(
    //   "https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=4qv5M5kkcFMGvn0T4xhj",
    //   {
    //     attribution:
    //       '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    //   }
    // ).addTo(this.map);

    // Leaflet.marker([42.2, 24.33333])
    //   .addTo(this.map)
    //   .bindPopup("Пазарджик")
    //   .openPopup();

    // this.map.on("click", (e: any) => {
    //   if (this.theMarker != undefined) {
    //     this.map.removeLayer(this.theMarker);
    //   }

    //   this.theMarker = L.marker(e.latlng, { draggable: true })
    //     .addTo(this.map)
    //     .bindPopup("Моята локация")
    //     .openPopup();
    // });

    this.http.get<OblastModel[]>("api/obl.json").subscribe((x) => {
      this.oblasti = x;
    });
  }
  onMapReady() {}

  nextPage() {
    this.nextPageEvent.next("");
  }
  previousPage() {
    this.previousPageEvent.next("");
  }

  onSubmit() {}

  addServiceHadnler(addedServices: string[]){
    console.log(addedServices);
  }
  addedAreaHandler(area: string){
    console.log(area);
  }
}
