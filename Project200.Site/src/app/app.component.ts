import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project200-Site';

  router: string;

  constructor() {
    this.router = window.location.pathname;
  }
}
