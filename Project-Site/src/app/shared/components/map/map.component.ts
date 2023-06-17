import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { Coordinates } from '../../models/studio/coordinates.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Input() coordinates: Coordinates;
  @Output() getLocationEvent = new EventEmitter<Coordinates>();

  private map: L.Map;
  private marker: any;

  private defaultCoordinates: L.LatLngExpression = [42.588612, 25.301165];
  private zoom: number = 7;

  ngOnInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: any) {
    if (
      changes.coordinates != null &&
      changes.coordinates.currentValue != null
    ) {
      this.addMarkerByCoordinates(this.coordinates);
    }
  }

  private addMarker() {
    this.map.addEventListener('click', (x) => {
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.marker = L.marker([x.latlng.lat, x.latlng.lng]);
      this.marker.addTo(this.map);

      var map: Coordinates = { latitude: x.latlng.lat, longitude: x.latlng.lng };
      this.getLocationEvent.next(map);
    });
  }

  private addMarkerByCoordinates(coordinates: any) {
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }
    this.marker = L.marker([coordinates.lat, coordinates.lng]);
    this.marker.addTo(this.map);

    var map: Coordinates = { latitude: coordinates.lat, longitude: coordinates.lng };
    this.getLocationEvent.next(map);
  }

  private initMap() {
    this.map = L.map('map').setView(this.defaultCoordinates, this.zoom);

    this.addMarker();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(this.map);

    if (this.coordinates) {
      this.addMarkerByCoordinates(this.coordinates);
    }
  }
}
