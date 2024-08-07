import { Component } from '@angular/core';

@Component({
  selector: 'app-no-directive',
  templateUrl: './no-directive.component.html',
  styleUrl: './no-directive.component.scss'
})
export class NoDirectiveComponent {
  addBgColor = false;

  onMouseOut(event: MouseEvent) {
    this.addBgColor = false;
  }
  
  onMouseOver(event: MouseEvent) {
    this.addBgColor = true;
  }
}
