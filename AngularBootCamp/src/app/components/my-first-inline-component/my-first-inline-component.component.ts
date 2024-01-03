/* ••[1]••••••••••••••••••••••••• my-first-inline-component.component.ts •••••••••••••••••••••••••••••• */

import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-inline-component',
  styles: `
    p {
	    color: green;
    }
  `,
  template: ` <p>my-first-inline-component works!</p> `,
})
export class MyFirstInlineComponentComponent {}
