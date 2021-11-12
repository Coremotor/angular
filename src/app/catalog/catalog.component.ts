import { Component } from '@angular/core';
import { ProductProperties, TToggleButton } from 'src/app/types';
import { buttons } from 'src/data/toggleButtons.data';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-catalog',
  providers: [CatalogService],
  template: `
    <header class="header">
      <app-toggle
        (changed)="catalogService.getProducts($event)"
        [buttons]="toggleButtons"
      ></app-toggle>
      <app-cart></app-cart>
    </header>

    <div class="wrapper">
      <app-product-card
        (addInCart)="cartService.addInCart($event)"
        *ngFor="let product of catalogService.productsList"
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
  toggleButtons: TToggleButton[] = buttons;
  sort: string = ProductProperties.all;

  constructor(
    private route: ActivatedRoute,
    public catalogService: CatalogService,
    public cartService: CartService
  ) {
    this.sort = this.route.snapshot.queryParams['sort'];
    catalogService.getProducts(this.sort);
  }
}
