import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fontSize: number = 15;
  textColor: 'red' | 'blue' = 'red';

  increaseFontSize() {
    this.fontSize += 4;
  }

  decreaseFontSize() {
    this.fontSize -= 4;
  }
}
