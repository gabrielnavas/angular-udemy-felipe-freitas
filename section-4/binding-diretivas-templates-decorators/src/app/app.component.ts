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
}
