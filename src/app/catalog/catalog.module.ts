import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductCardModule } from 'src/app/product-card/product-card.module';
import { ToggleModule } from 'src/app/toggle/toggle.module';
import { CartModule } from 'src/app/cart/cart.module';
import { RouterModule } from '@angular/router';
import { CatalogRoutingModule } from 'src/app/catalog/catalog-routing.module';
import { SelectModule } from 'src/app/select/select.module';
import {PaginationModule} from "src/app/pagination/pagination.module";

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    ProductCardModule,
    ToggleModule,
    CartModule,
    RouterModule,
    CatalogRoutingModule,
    SelectModule,
    PaginationModule,
  ],
  exports: [CatalogComponent],
})
export class CatalogModule {}
