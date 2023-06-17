// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { CatalogService } from '../shared/services/catalog.service';
// Components
import { PaginatorComponent } from '../shared/components/paginator/paginator.component';

@Component({
  selector: 'app-catalog-left-map',
  templateUrl: './catalog-left-map.component.html',
  styleUrls: ['./catalog-left-map.component.css']
})
export class CatalogLeftMapComponent implements OnInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Paginator
  @ViewChild(PaginatorComponent) paginatorComponent!: PaginatorComponent;
  pageSize = 5; // Number of items to display per page
  currentPage = 0; // Current page index
  totalItems = 0; // Total number of items

  // Catalog Data
  catalogData: any; // Salon Data

  constructor(
    private catalogService: CatalogService
  ) { }

  ngOnInit(): void {
    // Get All Salons
    this.getSalonData();
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
      });
    this.subscriptions.push(catalogSubscription);
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
}
