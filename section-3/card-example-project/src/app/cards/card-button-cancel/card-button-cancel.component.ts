import {Component} from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  template: `
    <div class="card-cancel-button">Cancel</div>
  `,
  styles: [`
    .card-cancel-button {
      font-size: 16px;
      text-align: center;
      margin-top: 10px;
      border-radius: 25px;
      background-color: lightcoral;
      color: white;
      cursor: pointer;
      padding: 10px;

      &:hover {
        background-color: white;
        color: lightcoral;
      }

      &:active {
        color: lightcoral;
        font-weight: bold;
        background-color: white;
      }
    }
  `]
})
export class CardButtonCancelComponent {

}
