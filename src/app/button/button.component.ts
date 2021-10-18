import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {TButtonColor, TButtonSize, TToggleButton} from "src/app/types";

@Component({
  selector: 'app-button',
  template: `
    <button
      [attr.disabled]="isDisabled ? '' : null"
      [style.cursor]="isActive ? 'auto' : 'pointer'"
      [ngClass]="calculateClasses"
      (click)="onClick()"
    >
      {{item.label || text}}
    </button>
  `,
  styles: [
    `
      .button {
        border: none;
      }
      .default-color {
        border: 1px solid black;
        background-color: white;
        color: black;
      }
      .primary-color {
        border: 1px solid #4050b5;
        background-color: #4050b5;
        color: white;
      }
      .accent-color {
        border: 1px solid #ff3f80;
        background-color: #ff3f80;
        color: white;
      }
      .success-color {
        border: 1px solid #00FF00;
        background-color: #00FF00;
        color: white;
      }
      .warning-color {
        border: 1px solid #f44335;
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

export class ButtonComponent implements OnChanges {
  @Input() color: TButtonColor = "default"
  @Input() size: TButtonSize = "default"
  @Input() isActive: boolean = false
  @Input() isDisabled: boolean = false
  @Input() item: TToggleButton = {label: '', value: ''}
  @Input() text?: string = 'Кнопка'

  @Output() changed: EventEmitter<string> = new EventEmitter()

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

  ngOnChanges(): void {
    if (this.color) {
      this.buttonColor = this.color
    }
    if (this.size) {
      this.buttonSize = this.size
    }
  }

  onClick() {
    this.changed.emit(this.item.value)
  }

  constructor() { }
}


