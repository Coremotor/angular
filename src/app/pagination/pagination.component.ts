import { Component } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-pagination',
  template: `
    <app-button
      class="load-more"
      (click)="loadMore()"
      size="small"
      text="Загрузить еще"
      [isDisabled]="
        this.catalogService.metaData.currentPage ===
        this.catalogService.metaData.totalPages
      "
      [isActive]="
        this.catalogService.metaData.currentPage ===
        this.catalogService.metaData.totalPages
      "
      [color]="
        this.catalogService.metaData.currentPage ===
        this.catalogService.metaData.totalPages ? 'default' : 'primary'
      "
      >load more</app-button
    >

    <div class="buttons-container">
      <app-button
        class="button"
        *ngFor="
          let pages of createPagesArray(catalogService.metaData.totalPages);
          index as i
        "
        size="small"
        text="{{ i + 1 }}"
        [color]="
          catalogService.metaData.currentPage === i + 1 ? 'default' : 'primary'
        "
        [isDisabled]="catalogService.metaData.currentPage === i + 1"
        [isActive]="catalogService.metaData.currentPage === i + 1"
        (click)="loadPage(i + 1)"
      ></app-button>
    </div>
  `,
  styles: [
    `
      .buttons-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .button {
        margin-right: 10px;
      }
    `,
  ],
})
export class PaginationComponent {
  createPagesArray(count: number) {
    return [...new Array(count)];
  }
  loadPage(page: number) {
    this.catalogService.getProductsFromApi(false, { page: page.toString() });
  }
  loadMore() {
    if (
      this.catalogService.metaData.currentPage ===
      this.catalogService.metaData.totalPages
    )
      return;
    this.catalogService.getProductsFromApi(true, {
      page: (this.catalogService.metaData.currentPage + 1).toString(),
    });
  }
  constructor(public catalogService: CatalogService) {}
}
