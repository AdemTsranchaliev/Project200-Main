// Angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.css']
})
export class LoadMoreButtonComponent implements OnInit {
  @Input() visibleItemsCount!: number;
  @Input() totalItemsCount!: number;
  @Output() loadMoreClicked = new EventEmitter<void>();
  @Output() loadLessClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  loadMore(): void {
    this.loadMoreClicked.emit();
  }

  loadLess(): void {
    this.loadLessClicked.emit();
  }
}
