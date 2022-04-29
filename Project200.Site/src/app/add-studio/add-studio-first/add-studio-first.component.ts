import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as Leaflet from 'leaflet';
import * as L from 'leaflet';
import { OblastModel } from 'src/app/shared/models/EkkateModels/oblast.model';
declare var $:any;
@Component({
  selector: 'app-add-studio-first',
  templateUrl: './add-studio-first.component.html',
  styleUrls: ['./add-studio-first.component.css']
})
export class AddStudioFirstComponent implements OnInit {
  
  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();

  @Input() item = '';

  temp: string[] = [];
  temp2: string[] = ['Маникюр', 'Лазерна епилация', 'Фризъорски салон', 'Подстрижка'];
  oblasti: OblastModel[] = [];
  obl:any=undefined;
  inp: string = '-1';
  oblast:string='';
  salonForm = this._formBuilder.group({
    salonName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
    city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    postCode: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]],
    street: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]],
  });
  gradove:OblastModel[] = [];
  constructor(private _formBuilder: FormBuilder, private http: HttpClient) { }

  public map: Leaflet.Map | undefined | any;
  theMarker = {};

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.map = Leaflet.map('add-studio-map').setView([42.67510859030425, 25.877197156660262], 7);
    Leaflet.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=4qv5M5kkcFMGvn0T4xhj', {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(this.map);

    Leaflet.marker([42.2, 24.33333]).addTo(this.map).bindPopup('Пазарджик').openPopup();

    this.map.on('click', (e: any) => {

      if (this.theMarker != undefined) {
        this.map.removeLayer(this.theMarker);
      };

      this.theMarker = L.marker(e.latlng, { draggable: true }).addTo(this.map).bindPopup('Моята локация').openPopup();
    });

    this.http.get<OblastModel[]>('api/obl.json').subscribe(x=>{
      this.oblasti=x;
      setTimeout(function () {
        $('.selectpicker').val('default').selectpicker('refresh');   // refresh the selectpicker with fetched courses
     }, 1000);

    });
  }
  onMapReady() {
   
}
  addServiceTag() {
    this.temp.push(this.inp);
    this.inp = '';
  }

  oblastAdded(){
    this.http.get<OblastModel[]>('api/ek_atte.json').subscribe(x=>{
      this.gradove=x.filter(y=>y.oblast=='SML');
      
      setTimeout(function () {
        $('.selectpicker').val('default').selectpicker('refresh');   // refresh the selectpicker with fetched courses
     }, 1000);
    });
  }


  removeTag(tag: string) {
    this.temp.splice(this.temp.findIndex(x => x == tag), 1);
  }

  nextPage() {
    this.nextPageEvent.next('');
  }
  previousPage() {
    this.previousPageEvent.next('');
  }

  onSubmit() { }
}
