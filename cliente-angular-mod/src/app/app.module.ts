import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JmaCalculadoraModule } from 'jma-calculadora/jma-calculadora.module';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, JmaCalculadoraModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
