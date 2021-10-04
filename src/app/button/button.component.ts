import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TButtonColor, TButtonSize} from "src/app/types";

@Component({
  selector: 'app-button',
  template: `
    <button
      [attr.disabled]="buttonIsDisabled"
      [style.cursor]="isActive ? 'auto' : 'pointer'"
      [ngClass]="calculateClasses"
    >
      Button
    </button>
  `,
  styles: [
    `
      .button {
        border: none;
      }
      .default-color {
        background-color: white;
        color: black;
      }
      .primary-color {
        background-color: #4050b5;
        color: white;
      }
      .accent-color {
        background-color: #ff3f80;
        color: white;
      }
      .success-color {
        background-color: #00FF00;
        color: white;
      }
      .warning-color {
        background-color: #f44335;
        color: white;
      }

      .default-size {
        padding: 20px;
      }
      .large-size {
        padding: 30px;
        font-size: 18px;
      }
      .small-size {
        padding: 10px;
        font-size: 12px;
      }

    `
  ]
})

export class ButtonComponent implements OnInit, OnChanges {
  @Input() color?: TButtonColor = "default"
  @Input() size?: TButtonSize = "default"
  @Input() isActive?: boolean = false
  @Input() isDisabled?: boolean = false

  buttonColor: TButtonColor = this.color || "default"
  buttonSize: TButtonSize = this.size || "default"

  get calculateClasses() {
    return {
      'button': true,
      'default-color': this.buttonColor === 'default',
      'primary-color': this.buttonColor === 'primary',
      'accent-color': this.buttonColor === 'accent',
      'success-color': this.buttonColor === 'success',
      'warning-color': this.buttonColor === 'warning',
      'default-size': this.buttonSize === 'default',
      'large-size': this.buttonSize === 'large',
      'small-size': this.buttonSize === 'small',
    }
  }

  get buttonIsDisabled(): string | null {
    return this.isDisabled ? '' : null
  }

  ngOnChanges(): void {
    if (this.color) {
      this.buttonColor = this.color
    }
    if (this.size) {
      this.buttonSize = this.size
    }
  }

  constructor() {}

  ngOnInit(): void {}
}


