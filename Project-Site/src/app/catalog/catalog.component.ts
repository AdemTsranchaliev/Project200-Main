// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Catalog Data
  catalogData: any;
  catalogOptionsData: any;

  // Main Form
  catalogForm!: FormGroup;

  // Salon Services
  services = new FormControl('');

  // Default Price Range
  value = 50;

  // Rating Array
  salonRating: number[] = [];

  // Pagination
  length = 10;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  pageEvent!: PageEvent;


  constructor(
    private formBuilder: FormBuilder,
    private catalogService: CatalogService
  ) { }

  ngOnInit(): void {
    this.createForm();

    const catalogSubscription = this.catalogService.getCatalog().subscribe((response: any) => {
      this.catalogData = response;
      this.manageRating(this.catalogData[0].AvgGrade);
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
      start: [null],
      end: [null],
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
   * By getting salon rating, creates new array to be able to render in the HTML
   * @param rating Number
   */
  manageRating(rating: number) {
    // TODO: Make it able to work with the whole RESPONSE
    this.salonRating = Array(rating).fill(0).map((x, i) => i);
  }

  /**
   * Handler which manages pages /Current page and ect./
   * @param e 
   */
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
