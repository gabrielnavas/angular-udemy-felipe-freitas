import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('meuInput')
  meuInputEl!: ElementRef<HTMLInputElement>;

  updateInputText() {
    this.meuInputEl.nativeElement.value = 'This work!!'
  }
}
