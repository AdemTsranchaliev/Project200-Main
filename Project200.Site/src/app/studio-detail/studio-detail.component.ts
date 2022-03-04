import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Studio } from '../shared/models/StudioModels/studio.model';
import * as Leaflet from 'leaflet';


@Component({
  selector: 'app-studio-detail',
  templateUrl: './studio-detail.component.html',
  styleUrls: ['./studio-detail.component.css']
})
export class StudioDetailComponent implements OnInit {

  studio: Studio = new Studio;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  public map: Leaflet.Map | undefined | any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.http.get<Studio>("api/studio.json").subscribe(x => {
        this.studio = x;
        
        // console.log(this.studio?.workingTime?.fromTo);

        this.map = Leaflet.map('detailMapStudio').setView([this.studio.map.lat, this.studio.map.lng], 7);
        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

        Leaflet.marker([this.studio.map.lat, this.studio.map.lng]).addTo(this.map).bindPopup('Име на салон').openPopup();
      });
    });
  }
}
