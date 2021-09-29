import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import {BadgeModule} from "../badge/badge.module";
import {RatingModule} from "../rating/rating.module";
import {ButtonModule} from "../button/button.module";



@NgModule({
  declarations: [
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    BadgeModule,
    RatingModule,
    ButtonModule
  ]
})
export class ProductCardModule { }
