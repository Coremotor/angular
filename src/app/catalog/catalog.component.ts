import { Component, OnInit } from '@angular/core';
import { ProductProperties, TToggleButton } from 'src/app/types';
import { buttons } from 'src/data/toggleButtons.data';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-catalog',
  template: `
    <header class="header">
      <app-toggle
        (changed)="catalogService.filterProducts($event)"
        [buttons]="toggleButtons"
      ></app-toggle>
      <app-cart></app-cart>
    </header>

    <app-select></app-select>

    <div class="wrapper">
      <app-product-card
        (addInCart)="cartService.addInCart($event)"
        *ngFor="let product of catalogService.filteredProductsList"
        [product]="product"
        [routerLink]="['/products', product.id]"
      ></app-product-card>
    </div>

    <app-pagination></app-pagination>
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
export class CatalogComponent implements OnInit {
  toggleButtons: TToggleButton[] = buttons;
  sort: string = ProductProperties.all;

  ngOnInit() {
    this.catalogService.getProductsFromApi(false);
  }

  constructor(
    private route: ActivatedRoute,
    public catalogService: CatalogService,
    public cartService: CartService
  ) {
    this.sort = this.route.snapshot.queryParams['sort'];
    catalogService.filterProducts(this.sort);
  }
}
