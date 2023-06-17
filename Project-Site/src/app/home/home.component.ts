// Angular
import { Component, OnInit } from '@angular/core';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { CatalogService } from '../catalog/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Slider Salon Data
  salonData: any;

  constructor(
    private catalogService: CatalogService
  ) { }

  ngOnInit(): void {
    // Get All Salons
    this.getSalonData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

  /**
   * This method create request to get all Salons for Home Page Slider
   */
  getSalonData() {
    const catalogSubscription = this.catalogService.getCatalog().subscribe((response: any) => {
      this.salonData = response;
    });
    this.subscriptions.push(catalogSubscription);
  }
}
