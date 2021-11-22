import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {RatingModule} from "src/app/rating/rating.module";



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    RatingModule
  ]
})
export class ProductModule { }
