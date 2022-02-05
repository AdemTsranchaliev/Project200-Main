import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-studio-third',
  templateUrl: './add-studio-third.component.html',
  styleUrls: ['./add-studio-third.component.css']
})
export class AddStudioThirdComponent implements OnInit {

  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {
    this.nextPageEvent.next('test 1 2 3 4 5 6 7 ');
  }
  previousPage(){
    this.previousPageEvent.next('');
  }
}
