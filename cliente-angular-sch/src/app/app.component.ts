import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente-angular-sch';
  valor = 666;

  pon(ev: any) {
    this.valor = ev.detail;
  }
}
