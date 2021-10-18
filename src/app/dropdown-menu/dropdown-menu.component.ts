import {Component, Input} from '@angular/core';
import {TTrigger} from "src/app/types";

@Component({
  selector: 'app-dropdown-menu',
  template: `
    <p>DropDown</p>
    <div class="wrapper">
      <app-button
        (click)="onBtnClick()"
        (mouseenter)="onMouseEnter()"
        (mouseleave)="onMouseLeave()"
        color="primary"
        size="default">

      </app-button>
      <app-menu [style.display]="isOpen ? 'flex' : 'none'" class="menu"></app-menu>
    </div>
  `,
  styles: [
    `
      .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 10px;
      }

      .menu {
        position: absolute;
        height: 200px;
        width: 300px;
        border: 1px solid black;
        top: 80px;
      }
    `
  ]
})
export class DropdownMenuComponent {
  @Input() trigger: TTrigger = "hover"

  isOpen: boolean = false

  onBtnClick(): void {
    if (this.trigger === 'click') {
      this.isOpen = !this.isOpen
    }
  }

  onMouseEnter(): void {
    if (this.trigger === 'hover') {
      this.isOpen = true
    }
  }
  onMouseLeave(): void {
    if (this.trigger === 'hover') {
      this.isOpen = false
    }
  }

  constructor() { }
}
