import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Service } from 'src/app/shared/models/studio/service.model';
import { Studio } from 'src/app/shared/models/studio/studio.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  @Input() model: Studio = new Studio();
  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.model.services.push(new Service());
    window.scrollTo(0, 0);
  }

  public addService() {
    var service = new Service();
    this.model.services.push(service);
  }

  public removeService(index: number) {
    if (index !== -1) {
      this.model.services.splice(index, 1);
    }
  }

  public nextPage() {
    this.nextPageEvent.next('');
  }

  public previousPage() {
    this.previousPageEvent.next('');
  }
}
