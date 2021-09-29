import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <div class="container">
      <p>dropdown works!</p>
      <app-button></app-button>
      <app-dropdown-item></app-dropdown-item>
    </div>
  `,
  styles: [
    '.container {border: 1px solid black; padding: 20px;}'
  ]
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
