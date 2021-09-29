import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="container">
      <p>product-card works!</p>
      <app-badge></app-badge>
      <app-rating></app-rating>
      <app-button></app-button>
    </div>
  `,
  styles: [
    '.container {border: 1px solid black; padding: 20px;}'
  ]
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
