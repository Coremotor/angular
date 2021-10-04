import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductCardModule} from "./product-card/product-card.module";
import {TooltipWithIconModule} from "./tooltip-with-icon/tooltip-with-icon.module";
import {DropdownModule} from "./dropdown/dropdown.module";
import {ButtonModule} from "src/app/button/button.module";
import {DropdownMenuModule} from "src/app/dropdown-menu/dropdown-menu.module";
import {MenuModule} from "src/app/menu/menu.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductCardModule,
    TooltipWithIconModule,
    DropdownModule,
    ButtonModule,
    DropdownMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
