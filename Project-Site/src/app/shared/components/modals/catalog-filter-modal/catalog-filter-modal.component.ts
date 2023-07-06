// Angular
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-catalog-filter-modal',
  templateUrl: './catalog-filter-modal.component.html',
  styleUrls: ['./catalog-filter-modal.component.css']
})
export class CatalogFilterModalComponent implements OnInit {
  // Options for Rendering
  itemsPerColumn = 6;
  currentColumnIndex = 0;

  // Services Column Arrays
  servicesLeftCol: string[] = [];
  servicesRightCol: string[] = [];

  // Load More - Button
  visibleItemsCountServices: number = 6; // Display 6 items initially

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    // Loads Filters
    this.initialLoad();
  }

  /**
   * This method loads more filters on click & on init by default renders two columns
   */
  initialLoad() {
    const services = this.data?.serviceList || [];

    this.servicesLeftCol = services.slice(this.currentColumnIndex, Math.ceil(services.length / 2));
    this.servicesRightCol = services.slice(Math.ceil(services.length / 2), services.length);
  }

  /**
  * Handle Click Functionality, while load more/less filters
  */
  handleLoadMoreClicked(filter: string): void {
    if (filter === 'services') {
      this.visibleItemsCountServices += 6;
    }
  }

  handleLoadLessClicked(filter: string): void {
    if (filter === 'services') {
      this.visibleItemsCountServices = 6;
    }
  }
}
