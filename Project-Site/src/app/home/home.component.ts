// Angular
import { Component, OnInit, AfterViewInit } from '@angular/core';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { CatalogService } from '../shared/services/catalog.service';
// Test Swiper Librari
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
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

  // Test Swiper
  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      roundLengths: true,
      breakpoints: {
        1200: {
          slidesPerView: 4
        },
        991: {
          slidesPerView: 2
        },
        565: {
          slidesPerView: 1
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      }
    });
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
