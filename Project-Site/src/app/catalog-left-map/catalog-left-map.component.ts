// Angular
import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
// RXJS
import { Subscription, Observable } from 'rxjs';
// Services
import { CatalogService } from '../shared/services/catalog.service';
// Components
import { PaginatorComponent } from '../shared/components/paginator/paginator.component';
import { CatalogFilterModalComponent } from '../shared/components/modals/catalog-filter-modal/catalog-filter-modal.component';

// ================= Test Map | Will be removed =================
import * as L from 'leaflet';
import { Coordinates } from '../shared/models/studio/coordinates.model';
// ================= Test Map | Will be removed =================

@Component({
  selector: 'app-catalog-left-map',
  templateUrl: './catalog-left-map.component.html',
  styleUrls: ['./catalog-left-map.component.css']
})
export class CatalogLeftMapComponent implements OnInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Modal Size Variable
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);

  // Paginator
  @ViewChild(PaginatorComponent) paginatorComponent!: PaginatorComponent;
  pageSize = 5; // Number of items to display per page
  currentPage = 0; // Current page index
  totalItems = 0; // Total number of items

  // Catalog Data
  catalogData: any; // Salon Data
  catalogOptionsData: any; // All Filters & ect. Data


  // ================= Test Map | Will be removed =================
  @Input() coordinates: Coordinates;
  @Output() getLocationEvent = new EventEmitter<Coordinates>();

  private map: L.Map;
  private marker: any;

  private defaultCoordinates: L.LatLngExpression = [42.588612, 25.301165];
  private zoom: number = 7;
  // ================= Test Map | Will be removed =================

  constructor(
    private catalogService: CatalogService,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    // Get All Salons
    this.getSalonData();
    // Get All Filter Options
    this.getSalonFilterOptionsData();

    // ================= Test Map | Will be removed =================
    this.initMap();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((el) => el.unsubscribe());
  }

  /**
  * This method create request to get all Salons for Catalog Page
  */
  getSalonData() {
    const catalogSubscription = this.catalogService
      .getCatalog()
      .subscribe((response: any) => {
        this.catalogData = response;
        this.totalItems = this.catalogData.length;
      });
    this.subscriptions.push(catalogSubscription);
  }

  /**
 * This method create request to get all Filter Options For Catalog Page
 */
  getSalonFilterOptionsData() {
    const catalogOptionsSubscription = this.catalogService
      .getCatalogOptions()
      .subscribe((response: any) => {
        this.catalogOptionsData = response;
      });
    this.subscriptions.push(catalogOptionsSubscription);
  }

  /**
   * Handle page changes
   * @param event PageEvent
   */
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    // Perform any additional logic or data retrieval here
  }

  /**
   * This Method opens Modal Component & passing data to it
   */
  openDialog() {
    const dialogRef = this.dialog.open(CatalogFilterModalComponent, {
      data: this.catalogOptionsData,
      width: '50%'
    });

    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        dialogRef.updateSize('90%');
      } else {
        dialogRef.updateSize('50%');
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      smallDialogSubscription.unsubscribe();
    });
  }



  // ================= Test Map | Will be removed =================

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
}
