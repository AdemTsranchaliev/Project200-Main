import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  // Main Form
  catalogForm!: FormGroup;

  // Salon Services
  service = new FormControl('');
  serviceList: string[] = ['Фризура', 'Маникюр', 'Педикюр', 'Оформяне на вежди', 'Микроблейдинг', 'Масаж'];

  // Datepicker
  rangeForm!: FormGroup;

  // Price Range
  value = 50;

  // Locations
  locationsList: string[] = ['Бургас', 'Варна', 'София', 'Пазарджик', 'Пловдив', 'Смолян'];

  // Filter Salons
  filterList = [
    { value: 'filter-0', viewValue: 'Предпочитани салони' },
    { value: 'filter-1', viewValue: 'Най-нови салони' },
    { value: 'filter-2', viewValue: 'Най-стари салони' },
    { value: 'filter-3', viewValue: 'В Близост салони' },
  ];


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.catalogForm = this.formBuilder.group({
      start: [null],
      end: [null],
    });
  }

  formatLabel(value: number): string {
    if (value >= 5) {
      return Math.round(value / 5) + 'k';
    }

    return `${value}`;
  }
}
