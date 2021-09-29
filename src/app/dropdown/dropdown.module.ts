import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import {ButtonModule} from "../button/button.module";
import {DropdownItemModule} from "src/app/dropdown-item/dropdown-item.module";



@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DropdownItemModule,
  ],
  exports: [
    DropdownComponent
  ],
})
export class DropdownModule { }
