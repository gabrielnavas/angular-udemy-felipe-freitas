import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('divContent')
  divContentEl!: ElementRef<HTMLDivElement>;

  changeDivContent() {
    this.divContentEl.nativeElement.textContent = 'This work!!'
  }
}
