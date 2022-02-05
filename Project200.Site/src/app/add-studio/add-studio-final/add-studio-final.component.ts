import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-studio-final',
  templateUrl: './add-studio-final.component.html',
  styleUrls: ['./add-studio-final.component.css']
})
export class AddStudioFinalComponent implements OnInit {

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
