import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string = 'John';
  price: number = 9_987.91;
  tax: number = 10;
  person1 = {
    id: '1',
    name: 'John',
    status: 1,
  }
  person2 = {
    id: '2',
    name: 'May',
    status: 2,
  }
  person3 = {
    id: '3',
    name: 'Joe',
    status: 3,
  }

  getStyle(status: number) {
    return {
      'active': status === 1,
      'partial': status === 2,
      'blocked': status === 3,
    };
  }
}
