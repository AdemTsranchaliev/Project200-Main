import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as Leaflet from 'leaflet';
import { LeafletMouseEvent } from 'leaflet';

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

  public map: Leaflet.Map | undefined;
  public marker:any;

  ngOnInit(): void {
    this.map = Leaflet.map('map').setView([42.643429793173254, 25.0927734375], 7);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    this.map.on('click', (x: LeafletMouseEvent) => {
      if(this.marker){
        this.map?.removeLayer(this.marker);
      }
      this.marker=Leaflet.marker([x.latlng.lat, x.latlng.lng]).addTo(this.map!);
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
