import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-header-search-modal',
  templateUrl: './header-search-modal.component.html',
  styleUrls: ['./header-search-modal.component.css']
})
export class HeaderSearchModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
