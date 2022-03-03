import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-studio',
  templateUrl: './add-studio.component.html',
  styleUrls: ['./add-studio.component.css']
})
export class AddStudioComponent implements OnInit {

  stepper = 0;


  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  nextStep($event: any) {
    this.stepper++;
  }
  previousStep($event: any) {
    this.stepper--;
  }

}
