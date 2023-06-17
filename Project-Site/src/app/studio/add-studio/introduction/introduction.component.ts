import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent {
  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();

  public nextPage() {
    this.nextPageEvent.next('');
  }

  public previousPage() {
    this.previousPageEvent.next('');
  }
}
