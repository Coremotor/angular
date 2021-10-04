import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  template: `
    <p>DropDown</p>
    <div class="wrapper">
      <app-button
        (click)="trigger === 'click' && onBtnClick()"
        (mouseenter)="trigger === 'hover' && onMouseEnter()"
        (mouseleave)="trigger === 'hover' && onMouseLeave()"
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
export class DropdownMenuComponent implements OnInit {
  @Input() trigger: 'hover' | 'click' = "hover"

  isOpen: boolean = false

  onBtnClick(): void {
    this.isOpen = !this.isOpen
  }

  onMouseEnter(): void {
    this.isOpen = true
  }
  onMouseLeave(): void {
    this.isOpen = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
