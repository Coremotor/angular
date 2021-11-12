import { Injectable } from '@angular/core';
import { products } from 'src/data/products.data';
import { TProduct } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products: TProduct[] = [];

  setData() {
    this.products = products;
  }

  getData() {
    return this.products;
  }

  constructor() {}
}
