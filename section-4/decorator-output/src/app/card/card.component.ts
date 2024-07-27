import { Component, EventEmitter, Output } from '@angular/core';

type DataEmit = {
  name: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<DataEmit>();

  onButtonClick() {
    console.log('CardComponent.onButtonClick() are executed');

    this.buttonClickEmitter.emit({
      name: 'John Wayne'
    })
  }
}
