import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-studio-second',
  templateUrl: './add-studio-second.component.html',
  styleUrls: ['./add-studio-second.component.css']
})
export class AddStudioSecondComponent implements OnInit {

  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();

  salonForm = this._formBuilder.group({
    salonInformation: ['', [Validators.required, Validators.minLength(60), Validators.maxLength(400)]],
    slogan: ['', [Validators.minLength(10), Validators.maxLength(80)]],
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  nextPage() {
    this.nextPageEvent.next('test 1 2 3 4 5 6 7 ');
  }
  previousPage() {
    this.previousPageEvent.next('');
  }

  onSubmit() { }
}
