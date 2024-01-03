/* ••[1]••••••••••••••••••••••••• my-first-directive.directive.spec.ts •••••••••••••••••••••••••••••• */

import { MyFirstDirectiveDirective } from './my-first-directive.directive';

describe('MyFirstDirectiveDirective', (): void => {
  it('should create an instance', (): void => {
    const directive: MyFirstDirectiveDirective =
      new MyFirstDirectiveDirective();
    expect(directive).toBeTruthy();
  });
});
