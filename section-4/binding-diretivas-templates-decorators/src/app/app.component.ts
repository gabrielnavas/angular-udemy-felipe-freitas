import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  classNameExample = 'container'
  valueProps = 'im green';
  typeProps = 'password';

  change() {
    this.valueProps = 'changed!';
  }
}
