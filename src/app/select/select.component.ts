import { Component } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-select',
  template: `
    <select class="select" (change)="sort($event)">
      <option *ngFor="let option of options" [value]="option.value">
        {{ option.label }}
      </option>
    </select>
  `,
  styles: [
    `
      :host {
        display: inline-block;
        margin-top: 20px;
      }
      .select {
        padding: 10px;
      }
    `,
  ],
})
export class SelectComponent {
  public options = [
    { value: 'none', label: 'Без сортировки' },
    { value: 'title', label: 'По названию' },
    { value: 'category', label: 'По категории' },
    { value: 'company', label: 'По компании' },
    { value: 'rating', label: 'По рейтингу' },
    { value: 'price', label: 'По цене' },
  ];

  sort(event: any) {
    this.catalogService.getProductsFromApi(event.target.value);
  }

  constructor(public catalogService: CatalogService) {}
}
