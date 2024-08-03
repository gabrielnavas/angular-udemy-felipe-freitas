import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('filhoComponent') filhoCompRef!: FilhoComponent

  callDizerOi() {
    this.filhoCompRef.mudarMessage();
  }
}
