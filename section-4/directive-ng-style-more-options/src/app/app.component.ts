import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fontSize: number = 15;
  textColor: 'red' | 'blue' = 'red';
  stylesString: string = `font-size: ${this.fontSize}px; color: ${this.textColor};`;

  increaseFontSize() {
    this.fontSize += 4;
    this.updateStyleString();
  }

  decreaseFontSize() {
    this.fontSize -= 4;
    this.updateStyleString();
  }

  toggleTextFontColor() {
    if(this.textColor==='red') {
      this.textColor = 'blue';
    } else {
      this.textColor = 'red';
    }
    this.updateStyleString();
  }

  private updateStyleString() {
    // its force update the H3
    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;
  }
}
