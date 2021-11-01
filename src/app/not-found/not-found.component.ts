import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: ` <p>Page 404</p> `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
        font-size: 26px;
      }
    `,
  ],
})
export class NotFoundComponent {
  constructor() {}
}
