import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-with-icon',
  template: `
    <div class="container">
      <p>tooltip-with-icon works!</p>
      <app-icon></app-icon>
      <app-tooltip></app-tooltip>
    </div>
  `,
  styles: [
    '.container {border: 1px solid black; padding: 20px;}'
  ]
})
export class TooltipWithIconComponent {

  constructor() { }
}
