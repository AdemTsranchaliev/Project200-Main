import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}
  map: L.Map;
  marker: any;
  ngOnInit(): void {
    this.initMap();
  }

  private addMarker() {
    this.map.addEventListener('click', (x) => {
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.marker = L.marker([x.latlng.lat, x.latlng.lng]);
      this.marker.addTo(this.map);
    });
  }

  private initMap() {
    this.map = L.map('map').setView([42.588612, 25.301165], 7);
    this.addMarker();
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(this.map);
  }
}
