// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { CatalogService } from './catalog.service';
// Components
import { PaginatorComponent } from '../paginator/paginator.component';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Paginator
  @ViewChild(PaginatorComponent) paginatorComponent!: PaginatorComponent;
  pageSize = 5; // Number of items to display per page
  currentPage = 0; // Current page index
  totalItems = 0; // Total number of items

  // Catalog Data
  catalogData: any; // Salons Data
  catalogOptionsData: any; // All Filters & ect. Data

  // Main Form
  catalogForm!: FormGroup;

  // Load More - Button
  visibleItemsCountServices: number = 5; // Display 5 items initially
  visibleItemsCountLocations: number = 5; // Display 5 items initially
  totalItemsCount: any;


  constructor(
    private formBuilder: FormBuilder,
    private catalogService: CatalogService
  ) { }

  ngOnInit(): void {
    // Init Form
    this.createForm();
    // Get All Salons
    this.getSalonData();
    // Get All Filter Options
    this.getSalonFilterOptionsData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

  /**
   * Create Form for Catalog
   */
  createForm(): void {
    // TODO: Need to put all Form Controls at the main Form /this.catalogForm/
    this.catalogForm = this.formBuilder.group({
      // services: this.formBuilder.group({
      //   haircut1: [false],
      //   haircut2: [false],
      //   haircut3: [false],
      // }),
      // locations: this.formBuilder.group({
      //   sofia: [false],
      //   plovdiv: [false],
      //   pazarjik: [false],
      // }),
      // ratings: this.formBuilder.group({
      //   oneStar: [false],
      //   twoStars: [false],
      //   threeStars: [false],
      //   fourStars: [false],
      //   fiveStars: [false],
      // }),
    });
  }

  /**
   * This method create request to get all Salons for Catalog Page
   */
  getSalonData() {
    const catalogSubscription = this.catalogService.getCatalog().subscribe((response: any) => {
      this.catalogData = response;
      this.totalItems = this.catalogData.length;
    });
    this.subscriptions.push(catalogSubscription);
  }

  /**
   * This method create request to get all Filter Options For Catalog Page
   */
  getSalonFilterOptionsData() {
    const catalogOptionsSubscription = this.catalogService.getCatalogOptions().subscribe((response: any) => {
      this.catalogOptionsData = response;
      this.totalItemsCount = this.catalogOptionsData?.serviceList?.length;

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
   * Handle Click Functionality, while load more/less filters
   */
  handleLoadMoreClicked(filter: string): void {
    if (filter === 'services') {
      this.visibleItemsCountServices += 5;
    } else if (filter === 'locations') {
      this.visibleItemsCountLocations += 5;
    }
  }

  handleLoadLessClicked(filter: string): void {
    if (filter === 'services') {
      this.visibleItemsCountServices = 5;
    } else if (filter === 'locations') {
      this.visibleItemsCountLocations = 5;
    }
  }
}
