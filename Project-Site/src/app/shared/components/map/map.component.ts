import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import * as L from 'leaflet';
import { Coordinates } from '../../models/studio/coordinates.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, OnChanges {
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
      this.marker = L.marker([x.latitude, x.latlng.lng]);
      this.marker.addTo(this.map);

      var map: Coordinates = {
        latitude: x.latlng.lat,
        longitude: x.latlng.lng,
      };
      this.getLocationEvent.next(map);
    });
  }

  private addMarkerByCoordinates(coordinates: any) {
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }
    this.marker = L.marker([coordinates.latitude, coordinates.longitude]);
    this.marker.addTo(this.map);

    var map: Coordinates = {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    };
    this.map.setView(new L.LatLng(map.latitude, map.longitude), 12);
    this.getLocationEvent.next(map);
  }

  private initMap() {
    this.map = L.map('map').setView(this.defaultCoordinates, this.zoom);

    this.addMarker();

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    if (this.coordinates) {
      this.addMarkerByCoordinates(this.coordinates);
    }
  }
}
