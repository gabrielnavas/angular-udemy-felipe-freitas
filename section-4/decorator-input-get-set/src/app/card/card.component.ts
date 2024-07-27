import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() _name = '';

  @Input('nameAlias') // need this...?
  set name(value: string) {
    this._name = value.toUpperCase();
  }
  get name() {
    return this._name;
  }
}
