import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getCatalog() {
    return this.http.get('assets/API/catalog/catalog.json');
  }

  getCatalogOptions() {
    return this.http.get('assets/API/catalog/catalog-options-fields.json');
  }
}
