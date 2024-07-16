import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardComponent} from "./card/card.component";
import { CardPurpleComponent } from './card-purple/card-purple.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardPurpleComponent
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
