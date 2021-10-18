import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductProperties, TToggleButton} from "src/app/types";

@Component({
  selector: 'app-toggle',
  template: `

    <ng-template ngFor let-button [ngForOf]="buttons">
      <app-button
        *ngIf="button.value"
        class="button"
        [color]="button.value === buttonValue ? 'primary' : 'default'"
        [isActive]="button.value === buttonValue"
        [isDisabled]="button.value === buttonValue"
        size="small"
        [item]="button"
        (changed)="onClick($event)"
      ></app-button>
    </ng-template>
  `,
  styles: [
    `
      .button { margin-right: 20px;}
      .button:last-child { margin-right: 0;}
    `
  ]
})
export class ToggleComponent implements OnInit {
  @Input() buttons: TToggleButton[] = []
  @Output() changed: EventEmitter<string> = new EventEmitter()

  buttonValue: string = ProductProperties.all

  onClick(value: string) {
    this.changed.emit(value)
    this.buttonValue = value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
