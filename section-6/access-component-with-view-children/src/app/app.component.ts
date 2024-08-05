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
  
  @ViewChildren('meuButton') 
  buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;
  
  ngAfterViewInit(): void {
    for(let i=0 ; i < this.buttonsEl.length; i++) {
      const button = this.buttonsEl.get(i);
      const buttonText = button?.nativeElement.textContent
      console.log(buttonText);
    }
  }
}
