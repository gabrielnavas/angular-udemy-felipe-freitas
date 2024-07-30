import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isGreen = true
  isOrange = true

  setGreen() {
    this.isOrange = true;
    this.isGreen = false;
  }

  setOrange() {
    this.isOrange = false;
    this.isGreen = true;
  }
}
