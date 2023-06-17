import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  @Input() avrGrade: number = 0;
  @Input() isVisible: boolean = true;

  starArray: number[] = [];
  negativeStarArray: number[] = [];

  setStarsArray(stars: number): Array<number> {
    this.starArray = Array(stars)
      .fill(0)
      .map((x, i) => i);
    return this.starArray;
  }

  setNegativeStarArray(stars: number): Array<number> {
    this.negativeStarArray = Array(Math.abs(stars - 5))
      .fill(0)
      .map((x, i) => i);
    return this.negativeStarArray;
  }
}
