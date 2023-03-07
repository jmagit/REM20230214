/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'jma-calculadora/dist/types';


@ProxyCmp({
  inputs: ['comaDecimal', 'value'],
  methods: ['init']
})
@Component({
  selector: 'jma-calculadora',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['comaDecimal', 'value'],
})
export class JmaCalculadora {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['updated', 'equaled']);
  }
}


export declare interface JmaCalculadora extends Components.JmaCalculadora {
  /**
   * El evento "updated" se dispara cuando se calcula un nuevo resultado
   */
  updated: EventEmitter<CustomEvent<number>>;
  /**
   * El evento "equaled" se dispara cuando se pulsa el = y se obtiene el resultado total
   */
  equaled: EventEmitter<CustomEvent<number>>;
}


