import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductCardModule} from "./product-card/product-card.module";
import {TooltipWithIconModule} from "./tooltip-with-icon/tooltip-with-icon.module";
import {DropdownModule} from "./dropdown/dropdown.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductCardModule,
    TooltipWithIconModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
