/* ••[1]••••••••••••••••••••••••• my-fist-directive.directive.ts •••••••••••••••••••••••••••••• */

import { Directive } from '@angular/core';

@Directive({
  selector: '[appMyFistDirective]',
})
export class MyFistDirectiveDirective {
  public constructor() {}
}
