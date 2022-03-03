import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-studio',
  templateUrl: './add-studio.component.html',
  styleUrls: ['./add-studio.component.css']
})
export class AddStudioComponent implements OnInit {

  stepper = 0;
  show: boolean[] = [false, true, true, true, true];
  
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  nextStep($event: any) {
    this.show[this.stepper] = true;
    this.stepper++;
    this.show[this.stepper] = false;
  }
  previousStep($event: any) {
    this.show[this.stepper] = true;
    this.stepper--;
    this.show[this.stepper] = false;
  }

}
