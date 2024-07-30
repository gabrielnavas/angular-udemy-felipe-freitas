import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input() person: Person = {} as Person;

  @Input() index: number = -1;

  @Output('onClick') onClickPersonEmitt = new EventEmitter<number>();

  onClick(index: number) {
    this.onClickPersonEmitt.emit(index);
  }
}
