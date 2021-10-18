import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipWithIconComponent } from './tooltip-with-icon.component';
import { TooltipModule } from '../tooltip/tooltip.module';
import { IconModule } from 'src/app/icon/icon.module';

@NgModule({
  declarations: [TooltipWithIconComponent],
  imports: [CommonModule, TooltipModule, IconModule],
  exports: [TooltipWithIconComponent],
})
export class TooltipWithIconModule {}
