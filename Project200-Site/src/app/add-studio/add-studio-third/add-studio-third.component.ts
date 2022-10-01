import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceCategory } from 'src/app/shared/models/StudioModels/service-category.model';

@Component({
  selector: 'app-add-studio-third',
  templateUrl: './add-studio-third.component.html',
  styleUrls: ['./add-studio-third.component.css']
})
export class AddStudioThirdComponent implements OnInit {

  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();


  services:ServiceCategory[]=[new ServiceCategory,new ServiceCategory];
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  nextPage() {
    this.nextPageEvent.next('test 1 2 3 4 5 6 7 ');
  }
  previousPage(){
    this.previousPageEvent.next('');
  }
}
