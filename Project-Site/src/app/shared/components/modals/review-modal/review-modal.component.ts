import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Review } from 'src/app/shared/models/studio/review.model';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.css']
})
export class ReviewModalComponent implements OnInit {

  public sortOptions: string[] = [
    "НАЙ-СТАРИ",
    "НАЙ-НОВИ",
    "РЕЙТИНГ"
  ]

  public sortValue = new FormControl(this.sortOptions[0]);

  constructor(@Inject(MAT_DIALOG_DATA) public reviews: Review[] ) { }

  ngOnInit(): void {
    this.sortValue.valueChanges.subscribe((value) => {
      let index = this.sortOptions.findIndex(x=>x==value);
      this.sort(index);
    });
  }

  public sort(option: number){
    if(option==0){
      this.reviews.sort((a, b) => new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime());
    }
    else if(option==1){
      this.reviews.sort((a, b) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime());
    }
    else if(option==2){
      this.reviews.sort((a, b) => b.rating - a.rating);
    }
  }

}
