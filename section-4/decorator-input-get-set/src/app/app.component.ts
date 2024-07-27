import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Input the name here!';

  handleInputKeyUp(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.name = value;
  }
}
