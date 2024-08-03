import { Component } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.scss'
})
export class FilhoComponent {
  message: string = 'Sou o componente filho';

  mudarMessage() {
    this.message = 'meu pai me chamou!';
  }
}
