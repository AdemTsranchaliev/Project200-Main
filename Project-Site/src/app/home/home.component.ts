// Angular
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { CatalogService } from '../shared/services/catalog.service';
// Libraries
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
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
