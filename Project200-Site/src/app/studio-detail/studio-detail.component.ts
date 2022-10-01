import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Studio } from '../shared/models/StudioModels/studio.model';
// import * as Leaflet from 'leaflet';


@Component({
  selector: 'app-studio-detail',
  templateUrl: './studio-detail.component.html',
  styleUrls: ['./studio-detail.component.css']
})
export class StudioDetailComponent implements OnInit {

  studio: Studio = new Studio;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  // public map: Leaflet.Map | undefined | any;
  isOpenMonday: boolean = true;
  isOpenTuesday: boolean = true;
  isOpenWednesday: boolean = true;
  isOpenThursday: boolean = true;
  isOpenFriday: boolean = true;
  isOpenSaturday: boolean = true;
  isOpenSunday: boolean = true;
  isOpenString: string = 'Отворено';
 
  // TO DO: used it from here, unstead from the HTML 
  // hours = [
  //   { value: '8:00', viewValue: '8:00' },
  //   { value: '9:00', viewValue: '9:00' },
  //   { value: '10:00', viewValue: '10:00' },
  // ];

 
  toogleInfo(day: string): void {
    switch (day) {
      case 'monday':
        this.isOpenMonday = !this.isOpenMonday;
        this.isOpenMonday ? this.isOpenString = 'Отворено' : this.isOpenString = 'Затворено';
        break;
      case 'tuesday':
        this.isOpenTuesday = !this.isOpenTuesday;
        this.isOpenTuesday ? this.isOpenString = 'Отворено' : this.isOpenString = 'Затворено';
        break;
      case 'wednesday':
        this.isOpenWednesday = !this.isOpenWednesday;
        this.isOpenWednesday ? this.isOpenString = 'Отворено' : this.isOpenString = 'Затворено';
        break;
      case 'thursday':
        this.isOpenThursday = !this.isOpenThursday;
        this.isOpenThursday ? this.isOpenString = 'Отворено' : this.isOpenString = 'Затворено';
        break;
      case 'friday':
        this.isOpenFriday = !this.isOpenFriday;
        this.isOpenFriday ? this.isOpenString = 'Отворено' : this.isOpenString = 'Затворено';
        break;
      case 'saturday':
        this.isOpenSaturday = !this.isOpenSaturday;
        this.isOpenSaturday ? this.isOpenString = 'Отворено' : this.isOpenString = 'Затворено';
        break;
      case 'sunday':
        this.isOpenSunday = !this.isOpenSunday;
        this.isOpenSunday ? this.isOpenString = 'Отворено' : this.isOpenString = 'Затворено';
        break;
    }
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.http.get<Studio>("api/studio.json").subscribe(x => {
        this.studio = x;

        // console.log(this.studio?.workingTime?.fromTo);

        // this.map = Leaflet.map('detail-map-studio').setView([this.studio.map.lat, this.studio.map.lng], 7);
        // Leaflet.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=4qv5M5kkcFMGvn0T4xhj', {
        //   attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        // }).addTo(this.map);

        // Leaflet.marker([this.studio.map.lat, this.studio.map.lng]).addTo(this.map).bindPopup('Име на салон').openPopup();
      });
    });
  }
}
