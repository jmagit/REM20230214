import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JmaCalculadoraAngularModule } from 'jma-calculadora-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, JmaCalculadoraAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
