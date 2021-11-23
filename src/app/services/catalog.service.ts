import { Injectable } from '@angular/core';
import {
  ProductProperties,
  TMeta,
  TProduct,
  TProductFromApi,
} from 'src/app/types';
import { HttpService } from 'src/app/services/http.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  products: TProduct[] = [];
  filteredProductsList: TProduct[] = [];
  metaData!: TMeta;
  product?: TProduct;
  queryParams: { [key: string]: string } = {};

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

  applyQuery(params: { [key: string]: string }) {
    this.queryParams = {
      ...this.queryParams,
      ...params,
    };
  }

  getProductsFromApi(
    loadMore: boolean,
    queryParams?: { [key: string]: string }
  ) {
    if (queryParams) {
      this.applyQuery(queryParams);
    }
    console.log(this.queryParams);
    const url = 'http://localhost:3000/api/products';
    let params = new HttpParams({ fromObject: this.queryParams });
    this.httpService
      .get<{ items: TProductFromApi[]; meta: TMeta }>(url, params)
      .subscribe((r) => {
        const products = r.items.map((p) => {
          return {
            ...p,
            inStock: Math.random() < 0.5,
            discount: Math.random() < 0.5 ? +Math.random().toFixed(2) : 0,
          };
        });
        if (loadMore) {
          this.products = [...this.products, ...products];
        } else {
          this.products = products;
        }
        if (this.route.snapshot.queryParams['sort']) {
          this.filterProducts(this.route.snapshot.queryParams['sort']);
        } else {
          this.filteredProductsList = this.products;
        }
        this.metaData = r.meta;
      });
  }

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}
}
