import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductCardModule } from 'src/app/product-card/product-card.module';
import { ToggleModule } from 'src/app/toggle/toggle.module';
import { CartModule } from 'src/app/cart/cart.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, ProductCardModule, ToggleModule, CartModule, RouterModule],
  exports: [CatalogComponent],
})
export class CatalogModule {}
