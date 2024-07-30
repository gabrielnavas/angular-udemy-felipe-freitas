import { Component } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  personSelected: Person | undefined = undefined;
  personIndexSelected: number = -1;

  persons: Person[] = [
    { id: '1', name: 'John', age: 18 },
    { id: '2', name: 'Mary', age: 25 },
    { id: '3', name: 'Liss', age: 35 },
    { id: '4', name: 'Zoe', age: 61 },
    { id: '5', name: 'Kell', age: 62 },
  ]

  selectPersonByIndex(index: number) {
    if (index >= 0 && index <= this.persons.length - 1) {
      this.personSelected = this.persons[index];
      this.personIndexSelected = index;
    }
  }

  cancelItemSelected() {
    this.personSelected = undefined;
    this.personIndexSelected = -1;
  }
}
