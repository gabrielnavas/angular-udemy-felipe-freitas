import {Component} from '@angular/core';

@Component({
  selector: 'app-card-button',
  template: `
    <div class="card-button">Purchase</div>
  `,
  styles: `
    .card-button {
      font-size: 16px;
      text-align: center;
      margin-top: 10px;
      border-radius: 25px;
      background-color: white;
      cursor: pointer;
      padding: 10px;

      &:hover {
        background-color: lightgray;
      }

      &:active {
        color: #fd7557;
        font-weight: bold;
        background-color: white;
      }
    }
  `
})
export class CardButtonComponent {

}
