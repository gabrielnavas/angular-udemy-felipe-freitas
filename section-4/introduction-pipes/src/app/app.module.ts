import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importar a localidade desejada
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { StatusClassPipe } from './pipes/status-class.pipe';
registerLocaleData(localePt, 'pt-BR');


@NgModule({
  declarations: [
    AppComponent,
    StatusClassPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }  // Definindo a localidade globalmente
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
