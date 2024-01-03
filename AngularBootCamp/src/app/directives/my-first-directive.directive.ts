/* ••[1]••••••••••••••••••••••••• my-fist-directive.directive.ts •••••••••••••••••••••••••••••• */

import { Directive } from '@angular/core';

@Directive({
  selector: '[appMyFirstDirective]',
})
export class MyFirstDirectiveDirective {
  public constructor() {}
}
