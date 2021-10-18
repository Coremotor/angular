import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {TItemInCart} from "src/app/types";

@Component({
  selector: 'app-cart',
  template: `
    <div class="wrapper" (click)="showCart()">
        <div class="icon material-icons md-32">shopping_bag</div>
        <span *ngIf="inCart.length > 0">{{productsCount}}</span>
    </div>
    <div *ngIf="show" class="cart">
      <div class="icon material-icons close" (click)="showCart()">close</div>

      <div class="item" *ngFor="let product of inCart">
        <span class="name">{{product.product.name}}</span>
        <span class="count">{{product.count}} шт.</span>
        <div class="price-wrapper">
          <span
            *ngIf="product.product.discount"
            class="discount"
          >{{product.product.price - (product.product.price * product.product.discount) * product.count | currency}}</span>
          <span
            [ngClass]="{'line-through': product.product.discount}"
            class="price"
          >{{product.product.price * product.count | currency}}</span>
        </div>
        <div class="icon material-icons delete" (click)="delete(product)">delete</div>
      </div>

      <div class="total-price">
        <div class="item">
          <span>Итого:</span>
          <span>{{totalPrice | currency}}</span>
        </div>

        <div class="item">
          <span>Итого со скидкой:</span>
          <span class="discount">{{totalPriceWithDiscount | currency}}</span>
        </div>

        <div class="item">
          <span>Скидка составила:</span>
          <span>{{(totalPrice - totalPriceWithDiscount) | currency}}</span>
        </div>
      </div>

      <app-button size="small" (click)="checkout()" color="success" text="Оформить заказ"></app-button>
      <div class="clear" (click)="clear()">Очистить корзину</div>
    </div>
  `,
  styles: [
    `
      .wrapper {
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      .icon {
        margin-right: 10px;
      }
      .close {
        cursor: pointer;
        margin-bottom: 20px;
      }
      .delete {
        cursor: pointer;
        margin-right: 0;
      }
      .cart {
        position: absolute;
        top: 50px;
        right: 10px;
        display: flex;
        flex-direction: column;
        background-color: white;
        border: 1px solid black;
        padding: 10px;
      }
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5px;
      }
      .name {
        margin-right: 10px;
      }
      .count {
        margin-right: 30px;
      }
      .price-wrapper {
        display: flex;
        flex-direction: column;
      }
      .discount {
        color: green;
      }
      .price {
        margin-right: 10px;
      }
      .total-price {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-top: 1px solid black;
        padding-top: 10px;
        margin-bottom: 10px;
      }
      .clear {
        cursor: pointer;
        text-align: center;
        margin-top: 20px;
      }
      .clear:hover {
        text-decoration: underline;
      }
      .line-through {
        text-decoration: line-through;
      }
    `
  ]
})
export class CartComponent implements OnChanges {
  @Input() inCart: TItemInCart[] = []
  show: boolean = false

  @Output() removeFromCart: EventEmitter<TItemInCart> = new EventEmitter()
  @Output() clearCart: EventEmitter<[]> = new EventEmitter()

  showCart() {
    if (this.inCart.length > 0) {
      this.show = !this.show
    }
  }

  clear () {
    this.clearCart.emit([])
    this.showCart()
  }

  checkout() {
    console.log('Заказ оформлен')
    this.clear()
  }

  delete(item: TItemInCart) {
    this.removeFromCart.emit(item)
  }

  get productsCount() {
    return this.inCart.reduce((acc, val) => acc + val.count, 0)
  }

  get totalPrice() {
    return this.inCart.reduce((acc, val) => acc + val.product.price * val.count, 0)
  }

  get totalPriceWithDiscount() {
    return this.inCart.reduce(
      (acc, val) =>
        acc + (val.product.discount
          ? (val.product.price - (val.product.price * val.product.discount)) * val.count
          : val.product.price * val.count), 0
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.inCart.length === 0) {
      this.show = false
    }
  }

  constructor() { }
}
