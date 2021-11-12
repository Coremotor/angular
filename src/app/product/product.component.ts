import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { products } from 'src/data/products.data';
import { TProduct } from 'src/app/types';
import {CatalogService} from "src/app/services/catalog.service";

@Component({
  selector: 'app-product',
  providers: [CatalogService],
  template: `
    <div *ngIf="catalogService.product" class="container">
      <div class="text">Товар: {{ catalogService.product && catalogService.product.name }}</div>
      <div class="text">
        Описание: {{ catalogService.product && catalogService.product.description }}
      </div>
      <div class="text">
        Цена: {{ catalogService.product && catalogService.product.price | currency: 'RUB' }}
      </div>
      <div class="text">
        Скидка: {{ catalogService.product && catalogService.product.discount | percent }}
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

  get priceWithDiscount() {
    if (this.catalogService.product) {
      return (
        this.catalogService.product.price - this.catalogService.product.price * this.catalogService.product.discount
      );
    } else return 0;
  }

  constructor(private route: ActivatedRoute, private router: Router, public catalogService: CatalogService) {
    this.productId = this.route.snapshot.params['id'];
    this.catalogService.getProduct(this.productId)
  }

  redirect() {
    this.router.navigate(['not-found'], { relativeTo: this.route })
  }

  ngOnInit() {
    if (!this.catalogService.product) {
      this.redirect()
    }
  }
}
