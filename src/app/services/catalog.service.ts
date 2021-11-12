import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductProperties, TProduct } from 'src/app/types';

@Injectable()
export class CatalogService {
  productsList: TProduct[] = this.dataService.getData();
  product?: TProduct;

  getProducts(filterBy: string) {
    if (filterBy === ProductProperties.all) {
      this.productsList = this.dataService.getData();
    }
    if (filterBy === ProductProperties.inStock) {
      this.productsList = this.dataService.getData().filter((p) => p.inStock);
    }
    if (filterBy === ProductProperties.withDiscount) {
      this.productsList = this.dataService.getData().filter((p) => p.discount);
    }
  }

  getProduct(id: string) {
    this.product = this.dataService.getData().find((p) => p.id === id);
  }

  constructor(public dataService: DataService) {}
}
