import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TProduct } from 'src/app/types';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="name">{{ product.name }}</div>
    <div class="description">{{ product.description }}</div>
    <div class="price-wrapper">
      <span class="price" [ngClass]="{ 'line-through': product.discount }">{{
        product.price | currency: 'RUB'
      }}</span>
      <span *ngIf="product.discount" class="price">{{
        priceWithDiscount | currency: 'RUB'
      }}</span>
    </div>
    <app-button
      (click)="onButtonClick($event)"
      text="В корзину"
      [isDisabled]="!product.inStock"
      [isActive]="!product.inStock"
      [color]="product.inStock ? 'primary' : 'default'"
      size="small"
    ></app-button>
    <div [style.color]="!product.inStock && 'red'" class="stock">
      {{ product.inStock ? 'В наличии' : 'Нет на складе' }}
    </div>
    <div
      *ngIf="product.discount"
      [style.color]="product.discount && 'green'"
      class="discount"
    >
      Скидка - {{ product.discount | percent }}
    </div>
  `,
  styles: [
    `
      :host {
        min-width: 200px;
        border: 1px solid black;
        padding: 20px;
        cursor: pointer;
        margin: 0 10px 10px 0;
      }
      :host:hover {
        box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
      }
      .name {
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
      }
      .description {
        margin-bottom: 40px;
      }
      .price-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      .price {
        margin-bottom: 20px;
      }
      .stock {
        margin-top: 20px;
      }
      .discount {
        margin-top: 10px;
      }
      .line-through {
        text-decoration: line-through;
      }
    `,
  ],
})
export class ProductCardComponent {
  @Input() product!: TProduct;
  @Output() addInCart: EventEmitter<TProduct> = new EventEmitter();

  public onButtonClick(event: MouseEvent) {
    event.stopPropagation();
    this.addInCart.emit(this.product);
  }

  get priceWithDiscount() {
    return this.product.price - this.product.price * this.product.discount;
  }

  constructor() {}
}
