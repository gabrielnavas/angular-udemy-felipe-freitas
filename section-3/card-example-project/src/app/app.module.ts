import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardComponent} from "./card/card.component";
import { CardPurpleComponent } from './card-purple/card-purple.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardPurpleButtonComponent } from './card-purple-button/card-purple-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardPurpleComponent,
    CardButtonComponent,
    CardPurpleButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
