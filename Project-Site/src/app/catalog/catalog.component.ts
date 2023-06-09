// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  // Salon Services
  services = new FormControl('');

  // Location Services
  locations = new FormControl('');

  // Default Price Range
  value = 50;

  // Rating Array
  salonRating: number[] = [];

  // Rating Services
  ratings = new FormControl('');


  constructor(
    private formBuilder: FormBuilder,
    private catalogService: CatalogService
  ) { }

  ngOnInit(): void {
    this.createForm();

    const catalogSubscription = this.catalogService.getCatalog().subscribe((response: any) => {
      this.catalogData = response;
      this.totalItems = this.catalogData.length;
      this.manageRating(this.catalogData);
    });
    this.subscriptions.push(catalogSubscription);

    const catalogOptionsSubscription = this.catalogService.getCatalogOptions().subscribe((response: any) => {
      this.catalogOptionsData = response;
    });
    this.subscriptions.push(catalogOptionsSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

  /**
   * Create Form for Catalog
   */
  createForm(): void {
    this.catalogForm = this.formBuilder.group({

    });
  }

  /**
   * Price Range Slider
   * @param value Number
   * @returns Current selected value
   */
  formatLabel(value: number): string {
    if (value >= 5) {
      return Math.round(value / 5) + 'k';
    }

    return `${value}`;
  }

  /**
   * By getting salon Response, creates new array to be able to render in the HTML
   * @param res Array
   */
  manageRating(res: any) {
    // TODO: Make it able to work with the whole RESPONSE

    res.forEach((x: any) => {
      this.salonRating.push(x.AvgGrade);
    });


    // this.salonRating = Array(5).fill(0).map((x, i) => i);
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    // Perform any additional logic or data retrieval here
  }
}
