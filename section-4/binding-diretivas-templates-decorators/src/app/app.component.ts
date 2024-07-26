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
  inputDisabled = true;

  buttonTitle = "Iam a title and Iam a attribute on text"
  buttonValue = "Iam a title and Iam a attribute on text"
  buttonDisabled = false
  styleHeightButton = '140';

  colorDiv = "black";

  change() {
    this.valueProps = 'changed!';
  }

  enableInput() {
    this.inputDisabled = false;
  }

  diasbleInput() {
    this.inputDisabled = true;
  }

  setInputPasswordType() {
    this.typeProps = 'password';
  }

  setInputTextType() {
    this.typeProps = 'text';
  }

  handleKeyUp(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueProps = value;
    console.log(this.valueProps);
  }

  onButtonClick() {
    this.buttonDisabled = !this.buttonDisabled;
  }

  onButtonChangeColorClick() {
    if(this.colorDiv === "black") {
      this.colorDiv = "white";
    } else {
      this.colorDiv = "black";
    }
  }
}
