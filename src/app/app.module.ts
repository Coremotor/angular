import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductCardModule } from './product-card/product-card.module';
import { TooltipWithIconModule } from './tooltip-with-icon/tooltip-with-icon.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { ButtonModule } from 'src/app/button/button.module';
import { DropdownMenuModule } from 'src/app/dropdown-menu/dropdown-menu.module';
import { CatalogModule } from 'src/app/catalog/catalog.module';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';

registerLocaleData(localeRu, 'ru', localeRuExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductCardModule,
    TooltipWithIconModule,
    DropdownModule,
    ButtonModule,
    DropdownMenuModule,
    CatalogModule,
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'RUB' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
