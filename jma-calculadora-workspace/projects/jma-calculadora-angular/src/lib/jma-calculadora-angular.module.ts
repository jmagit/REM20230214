import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from 'jma-calculadora/loader';
import { DIRECTIVES } from './src';
import { NumericValueAccessor } from './src/number-value-accessor';
@NgModule({
  providers: [ { provide: APP_INITIALIZER, useFactory: () => defineCustomElements() }],
  declarations: [DIRECTIVES, NumericValueAccessor],
  exports: [DIRECTIVES,  NumericValueAccessor],
})
export class JmaCalculadoraAngularModule { }

