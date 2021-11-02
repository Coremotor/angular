import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: ` <a [routerLink]="['/products']"> Go to products </a> `,
  styles: [],
})
export class MainComponent {
  constructor() {}
}
