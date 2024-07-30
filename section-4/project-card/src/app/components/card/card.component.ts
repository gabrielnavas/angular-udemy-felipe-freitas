import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) planType = '';
  @Input({ required: true }) price = 0.00;
  @Input({ alias: 'style' }) cardStyle: 'orange' | 'purple' = 'orange';

  @Output('cliked') buttonClikedEmitter = new EventEmitter();

  onCliked() {
    this.buttonClikedEmitter.emit();
  }
}
