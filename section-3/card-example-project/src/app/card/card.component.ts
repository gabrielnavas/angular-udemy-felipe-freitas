import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  plan = {
    infos: {
      type: 'Simple',
      price: 1000,
    }
  }


  get fullPrice() {
    return `$${this.plan.infos.price}/Month`
  }
}
