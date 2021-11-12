import { Injectable } from '@angular/core';
import {TItemInCart, TProduct} from "src/app/types";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  inCart: TItemInCart[] = [];
  show: boolean = false;

  toggleShowCart() {
    if (this.inCart.length > 0) {
      this.show = !this.show;
    }
  }

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

  delete(product: TItemInCart) {
    this.inCart = this.inCart.filter(
      (p) => p.product.id !== product.product.id
    );
    if (this.inCart.length === 0) {
      this.show = false
    }
  }

  clearCart() {
    this.inCart = [];
    this.show = false
  }

  checkout() {
    console.log('Заказ оформлен');
    this.clearCart();
  }

  constructor() {}
}
