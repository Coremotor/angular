import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { products } from 'src/data/products.data';
import { TProduct } from 'src/app/types';

@Component({
  selector: 'app-product',
  template: `
    <div *ngIf="getProduct" class="container">
      <div class="text">Товар: {{ getProduct && getProduct.name }}</div>
      <div class="text">
        Описание: {{ getProduct && getProduct.description }}
      </div>
      <div class="text">
        Цена: {{ getProduct && getProduct.price | currency: 'RUB' }}
      </div>
      <div class="text">
        Скидка: {{ getProduct && getProduct.discount | percent }}
      </div>
      <div class="text">
        Цена со скидкой: {{ priceWithDiscount | currency: 'RUB' }}
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
      }
      .container {
        border: 1px solid darkblue;
        border-radius: 8px;
        padding: 20px;
      }
      .text {
        margin-bottom: 10px;
      }
    `,
  ],
})
export class ProductComponent implements OnInit{
  public productId: string;
  products: TProduct[] = products;

  get getProduct() {
    return products.find((p) => p.id === this.productId);
  }

  get priceWithDiscount() {
    if (this.getProduct) {
      return (
        this.getProduct.price - this.getProduct.price * this.getProduct.discount
      );
    } else return 0;
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.productId = this.route.snapshot.params['id'];
  }

  redirect() {
    this.router.navigate(['not-found'], { relativeTo: this.route })
  }

  ngOnInit() {
    if (!this.getProduct) {
      this.redirect()
    }
  }
}
