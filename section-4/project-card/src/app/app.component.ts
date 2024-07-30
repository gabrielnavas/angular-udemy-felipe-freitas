import { Component } from '@angular/core';
import { Card } from './Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  simpleCard = new Card('Simple', 100.0, 'orange');
  fullCard = new Card('Full', 200.0, 'purple');

  onCardButtonClicked() {
    console.log('button clicked');
  }
}
