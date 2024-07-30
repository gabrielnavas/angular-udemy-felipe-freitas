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
  stylesObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor,
  }

  increaseFontSize() {
    this.fontSize += 4;
    this.updateStyleString();
    this.updateStyleObj();
  }

  decreaseFontSize() {
    this.fontSize -= 4;
    this.updateStyleString();
    this.updateStyleObj();
  }

  toggleTextFontColor() {
    if(this.textColor==='red') {
      this.textColor = 'blue';
    } else {
      this.textColor = 'red';
    }
    this.updateStyleString();
    this.updateStyleObj();
  }

  private updateStyleObj() {
    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    }
  }

  private updateStyleString() {
    // its force update the H4
    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;
  }
}
