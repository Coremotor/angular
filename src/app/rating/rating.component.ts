import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <p>
      <span class="text">Рейтинг:</span>
      <span>{{ rating }}</span>
    </p>
  `,
  styles: [
    `
      .text {
        margin-right: 10px;
      }
    `,
  ],
})
export class RatingComponent {
  @Input()
  rating: number = 0;
  constructor() {}
}
