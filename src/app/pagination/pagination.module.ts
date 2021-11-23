import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import {ButtonModule} from "src/app/button/button.module";



@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    PaginationComponent
  ],
})
export class PaginationModule { }
