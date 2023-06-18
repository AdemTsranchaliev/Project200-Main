// Angular
import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent {
  // Price Range
  minValue: number = 0;
  maxValue: number = 200;

  // Optins Object
  options: Options = {
    floor: 0,
    ceil: 200,
    step: 5
  };
}
