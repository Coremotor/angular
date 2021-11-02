import { Component } from '@angular/core';
import { products } from 'src/data/products.data';
import {
  ProductProperties,
  TItemInCart,
  TProduct,
  TToggleButton,
} from 'src/app/types';
import { buttons } from 'src/data/toggleButtons.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  template: `
    <header class="header">
      <app-toggle
        (changed)="filter($event)"
        [buttons]="toggleButtons"
      ></app-toggle>
      <app-cart
        (clearCart)="clearCart($event)"
        (removeFromCart)="delete($event)"
        [inCart]="inCart"
      ></app-cart>
    </header>

    <div class="wrapper">
      <app-product-card
        (addInCart)="addInCart($event)"
        *ngFor="let product of productsList"
        [product]="product"
        [routerLink]="['/products', product.id]"
      ></app-product-card>
    </div>

    <!--    <ng-template ngFor let-product [ngForOf]="productsList">-->
    <!--        <app-product-card (addInCart)="click($event)" [product]="product"></app-product-card>-->
    <!--    </ng-template>-->
  `,
  styles: [
    `
      .header {
        display: flex;
        justify-content: space-between;
      }
      .wrapper {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        margin: 50px 0;
      }
    `,
  ],
})
export class CatalogComponent {
  productsList: TProduct[] = products;
  inCart: TItemInCart[] = [];
  toggleButtons: TToggleButton[] = buttons;
  sort: string = ProductProperties.all;

  addInCart(product: TProduct) {
    const item = this.inCart.find((p) => p.product.id === product.id);
    if (item) {
      this.inCart = this.inCart.map((p) =>
        product.id === p.product.id
          ? { count: p.count + 1, product: p.product }
          : p
      );
    } else {
      this.inCart.push({ count: 1, product });
    }
  }

  filter(value: string) {
    if (value === ProductProperties.all) {
      this.productsList = products;
    }
    if (value === ProductProperties.inStock) {
      this.productsList = products.filter((p) => p.inStock);
    }
    if (value === ProductProperties.withDiscount) {
      this.productsList = products.filter((p) => p.discount);
    }
  }

  delete(product: TItemInCart) {
    this.inCart = this.inCart.filter(
      (p) => p.product.id !== product.product.id
    );
  }

  clearCart(value: []) {
    this.inCart = value;
  }

  constructor(private route: ActivatedRoute) {
    this.sort = this.route.snapshot.queryParams['sort'];
    if (this.sort === ProductProperties.all) {
      this.productsList = products;
    }
    if (this.sort === ProductProperties.inStock) {
      this.productsList = products.filter((p) => p.inStock);
    }
    if (this.sort === ProductProperties.withDiscount) {
      this.productsList = products.filter((p) => p.discount);
    }
  }
}
