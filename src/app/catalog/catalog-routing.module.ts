import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from 'src/app/product/product.component';
import { CatalogComponent } from 'src/app/catalog/catalog.component';

export const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
