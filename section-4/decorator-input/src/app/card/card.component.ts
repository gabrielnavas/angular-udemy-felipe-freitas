import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input('titleAlias') title: string = '';
  @Input({ required: true, alias: 'moneyAlias', transform: (value: string) => `${value} modified` }) money: string = '';
}
