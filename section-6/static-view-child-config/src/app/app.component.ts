import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('meuInput') 
  meuInputEl!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log('constructor');
    console.log(this.meuInputEl);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.meuInputEl);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.meuInputEl);
    this.meuInputEl.nativeElement.focus();
  }
}
