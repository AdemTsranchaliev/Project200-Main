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
    // this.route.params.subscribe(params => {
    //   this.http.get<Studio>("api/studio.json").subscribe(x => {
    //     this.studio = x;
    //     console.log(x)
    //   })
    // });


    this.map = Leaflet.map('detailMapStudio').setView([42.67510859030425, 25.877197156660262], 7);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    Leaflet.marker([42.029021, 24.296614]).addTo(this.map).bindPopup('Име на салон').openPopup();
  }

}
