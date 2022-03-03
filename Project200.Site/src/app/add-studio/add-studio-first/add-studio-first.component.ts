import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as Leaflet from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-add-studio-first',
  templateUrl: './add-studio-first.component.html',
  styleUrls: ['./add-studio-first.component.css']
})
export class AddStudioFirstComponent implements OnInit {

  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();

  @Input() item = '';

  salonForm = this._formBuilder.group({
    salonName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
  });

  constructor(private _formBuilder: FormBuilder) { }

  public map: Leaflet.Map | undefined | any;
  theMarker = {};

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.map = Leaflet.map('map').setView([42.67510859030425, 25.877197156660262], 7);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    Leaflet.marker([42.2, 24.33333]).addTo(this.map).bindPopup('Пазарджик').openPopup();

    this.map.on('click', (e: any) => {

      if (this.theMarker != undefined) {
        this.map.removeLayer(this.theMarker);
      };

      this.theMarker = L.marker(e.latlng, { draggable: true }).addTo(this.map).bindPopup('Моята локация').openPopup();
      console.log(this.theMarker);
    });
  }

  nextPage() {
    this.nextPageEvent.next('test 1 2 3 4 5 6 7 ');
  }
  previousPage() {
    this.previousPageEvent.next('');
  }

  onSubmit() { }
}
