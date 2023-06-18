import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-studio-card',
  templateUrl: './studio-card.component.html',
  styleUrls: ['./studio-card.component.css']
})
export class StudioCardComponent {
  @Input() currentPage?: number; // currentPage to set Custom Paginator (for now)
  @Input() pageSize?: number; // pageSize to set Custom Paginator (for now)
  @Input() element: any; // Data get from Parent Component
}
