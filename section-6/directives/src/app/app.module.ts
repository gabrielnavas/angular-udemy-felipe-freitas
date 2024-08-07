import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoDirectiveComponent } from './no-directive/no-directive.component';
import { WithDirectiveComponent } from './with-directive/with-directive.component';
import { HightlighDirective } from './directives/hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NoDirectiveComponent,
    WithDirectiveComponent,
    HightlighDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
