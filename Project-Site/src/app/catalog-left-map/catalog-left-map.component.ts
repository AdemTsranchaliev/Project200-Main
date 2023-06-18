// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { CatalogService } from '../shared/services/catalog.service';
// Components
import { PaginatorComponent } from '../shared/components/paginator/paginator.component';
import { CatalogFilterModalComponent } from '../shared/components/modals/catalog-filter-modal/catalog-filter-modal.component';

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
  catalogOptionsData: any; // All Filters & ect. Data

  constructor(
    private catalogService: CatalogService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // Get All Salons
    this.getSalonData();
    // Get All Filter Options
    this.getSalonFilterOptionsData();
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

    // ============== Check what this do ==============
    const dialogSubscription = dialogRef.afterClosed().subscribe();
    this.subscriptions.push(dialogSubscription);
  }
}
