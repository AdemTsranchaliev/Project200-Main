import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-studio-fourth',
  templateUrl: './add-studio-fourth.component.html',
  styleUrls: ['./add-studio-fourth.component.css']
})
export class AddStudioFourthComponent implements OnInit {

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
