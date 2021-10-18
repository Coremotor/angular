import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, ButtonModule],
  exports: [DropdownComponent],
})
export class DropdownModule {}
