/* ••[1]••••••••••••••••••••••••• my-first-inline-component.component.ts •••••••••••••••••••••••••••••• */

import { Component } from '@angular/core';

// Event binding
@Component({
  selector: 'app-my-first-inline-component',
  template: `
    <!-- Event binding -->
    <p (click)="logMessage($event)">Click me</p>
  `,
})
export class MyFirstInlineComponentComponent {
  public logMessage(_event: MouseEvent): void {
    console.log('Some Message');
  }
}

/*
// Property binding
@Component({
  selector: 'app-my-first-inline-component',
  template: `
    <!-- One way binding uses interpolation -->
    <p>{{ title }} works!</p>
  `,
})
export class MyFirstInlineComponentComponent {
  // One way binding
  public title: string = 'my-first-component';
}
*/

/*
// Two-way binding
@Component({
  selector: 'app-my-first-inline-component',
  template: `
    <!-- Two way binding -->
    <input [(ngModel)]="text" />
    <!-- One way binding -->
    <p>Text: {{ text }}</p>
  `,
})
export class MyFirstInlineComponentComponent {
  public text: string = 'Initial text';
}
*/
