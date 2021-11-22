import { Injectable } from '@angular/core';
import { ProductProperties, TProduct, TProductFromApi } from 'src/app/types';
import { HttpService } from 'src/app/services/http.service';
import { HttpParams } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  products: TProduct[] = [];
  filteredProductsList: TProduct[] = [];
  product?: TProduct;

  filterProducts(filterBy: string) {
    if (filterBy === ProductProperties.all) {
      this.filteredProductsList = this.products;
    }
    if (filterBy === ProductProperties.inStock) {
      this.filteredProductsList = this.products.filter((p) => p.inStock);
    }
    if (filterBy === ProductProperties.withDiscount) {
      this.filteredProductsList = this.products.filter((p) => p.discount);
    }
  }

  getProduct(id: string) {
    this.product = this.products.find((p) => p.id === id);
  }

  log(string?: string) {
    console.log(string);
  }

  getProductsFromApi(sortParams?: string) {
    const url = 'http://localhost:3000/api/products';
    let params = new HttpParams();
    if (sortParams && sortParams !== 'none') {
      params = params.set('orderBy', sortParams);
    }
    this.httpService
      .get<{ items: TProductFromApi[] }>(url, params)
      .subscribe((r) => {
        this.products = r.items.map((p) => {
          return {
            ...p,
            inStock: Math.random() < 0.5,
            discount: +Math.random().toFixed(2),
          };
        });
        this.filterProducts(this.route.snapshot.queryParams['sort']);
      });
  }

  constructor(private httpService: HttpService, private route: ActivatedRoute,) {}
}
