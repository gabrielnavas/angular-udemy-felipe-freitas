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
    console.log(this.meuInputEl);
  }

  ngOnInit(): void {
    console.log(this.meuInputEl);
  }

  ngAfterViewInit(): void {
    console.log(this.meuInputEl);
  }
}
