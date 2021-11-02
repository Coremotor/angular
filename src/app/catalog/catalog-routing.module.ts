import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from 'src/app/product/product.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

export const routes: Routes = [
  { path: 'product/:id', component: ProductComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
