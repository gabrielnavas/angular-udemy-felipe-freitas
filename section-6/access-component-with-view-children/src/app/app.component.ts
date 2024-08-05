import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  buttonList = [
    'button 1',
    'button 2',
    'button 3',
  ]

  index = "";

  @ViewChildren('meuButton')
  buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit(): void {
    this.colorRedOnButtons();
    this.updateIfListUpdate()
  }
  
  updateIfListUpdate() {
    this.buttonsEl.changes.subscribe(result => {
      console.log(result);
    })
  }

  private colorRedOnButtons() {
    for (let i = 0; i < this.buttonsEl.length; i++) {
      const button = this.buttonsEl.get(i);
      if (button !== undefined) {
        button.nativeElement.style.color = 'red';
      }
    }
  }

  changeColor(event: MouseEvent) {
    const btnElement = event.target as HTMLButtonElement;
    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';
  }

  resetButtons() {
    this.buttonsEl.forEach(button => {
      button.nativeElement.style.backgroundColor = '';
      button.nativeElement.style.color = 'black';
    })
  }

  greenOnFirst() {
    this.buttonsEl.first.nativeElement.style.backgroundColor = 'green';
  }

  pinkOnFirst() {
    this.buttonsEl.last.nativeElement.style.backgroundColor = 'yellow';
  }

  drawByIndex() {
    const button = this.buttonsEl.get(Number(this.index));
    if (button !== undefined) {
      button.nativeElement.style.backgroundColor = 'blue';
    }
  }

  drawByClass() {
    const button = this.buttonsEl.find(button => button.nativeElement.className === `button-${this.index}`);
    if (button !== undefined) {
      button.nativeElement.style.backgroundColor = 'cyan';
    }
  }

  removeFirst() {
    if (Number(this.index) < this.buttonList.length) {
      this.buttonList.shift();
    }
  }
}
