import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 5;
  @Input() currentPage: number = 0;
  @Input() pageSizeOptions: number[] = [5, 10, 25, 100];

  @Output() pageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(event: PageEvent): void {
    this.pageChange.emit(event);
  }
}
